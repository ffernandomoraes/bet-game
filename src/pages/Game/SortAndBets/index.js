import React, { useState, useCallback, useEffect } from 'react';
import MoneyFormat from 'components/MoneyFormat';
import { db } from 'services/firebase';
import { useParams } from 'react-router-dom';

const SortAndBets = ({ game, player }) => {
  const { id } = useParams();

  const [bet, setBet] = useState('');
  const [number, setNumber] = useState('');

  const [isSorting, setIsSorting] = useState(false);
  const [numberSort, setNumberSort] = useState(0);

  const [checkResults, setCheckResults] = useState(false);

  const searchBet = game?.bets?.filter(b => b.id === player?.id && b.bet > Number(0));
  const wagered = searchBet.length;
  const bet_value = searchBet?.[0]?.bet;
  const number_value = searchBet?.[0]?.number;

  const generateRandomNumber = () => Math.floor(Math.random() * (32 - 1 + 1) + 1);

  const handleChangeBet = useCallback(e => {
    const value = e.target.value;
    setBet(value);
  }, []);

  const handleChangeNumber = useCallback(e => {
    const value = Number(e.target.value);

    if (value > 32) {
      setNumber(32);
      return;
    }

    setNumber(e.target.value);
  }, []);

  const resetRound = useCallback(async () => {
    const bets = game?.players.map(u => ({ id: u.id, bet: 0 }));
    const round = game?.round + 1;

    await db.ref(`room/${id}`).update({
      round,
      bets,
      numberWin: generateRandomNumber()
    });

    setTimeout(() => {
      setIsSorting(false);
      setCheckResults(false);
      setNumberSort(0);
    }, 200);
  }, [id, game]);

  const checkValues = useCallback(async () => {
    setCheckResults(true);

    const winners = game?.bets?.filter(b => b.number === game?.numberWin);
    const losers = game?.bets?.filter(b => b.number !== game?.numberWin);

    let historic = [];

    if (winners.length) {
      let newPlayers = [...game?.players];

      winners.forEach(b => {
        const index = game?.players.findIndex(u => u.id === b.id);
        newPlayers[index].money = newPlayers[index].money + (b.bet * game?.players.length + b.bet);
        historic = [
          ...historic,
          { id: b.id, name: newPlayers[index].name, gain: b.bet * game?.players.length + b.bet }
        ];
      });

      await db.ref(`room/${id}/players`).set(newPlayers);
    }

    if (losers.length) {
      let newPlayers = [...game?.players];

      losers.forEach(b => {
        const index = game?.players.findIndex(u => u.id === b.id);
        newPlayers[index].money = newPlayers[index].money - b.bet;
        historic = [...historic, { id: b.id, name: newPlayers[index].name, lose: b.bet }];
      });

      await db.ref(`room/${id}/players`).set(newPlayers);
    }

    await db.ref(`room/${id}/historic`).set(historic);

    setTimeout(() => {
      resetRound();
    }, 2000);
  }, [game, id, resetRound]);

  const sortNumber = useCallback(async () => {
    let effects = [];

    for (let i = 0; i < 10; i++) {
      effects[i] = new Promise(resolve => {
        setTimeout(() => {
          setNumberSort(generateRandomNumber());
          resolve();
        }, i * 600);
      });
    }

    await Promise.all(effects);

    setNumberSort(game?.numberWin);

    setTimeout(() => {
      checkValues();
    }, 1500);
  }, [game, checkValues]);

  const checkPlayersBet = useCallback(() => {
    const countBets = game?.bets?.filter(b => b.bet === Number(0));

    if (countBets.length === 0 && !isSorting && !checkResults) {
      setIsSorting(true);
      sortNumber();
      return;
    }
  }, [game, sortNumber, isSorting, checkResults]);

  const handleSubmitBet = useCallback(
    async e => {
      e.preventDefault();

      if (wagered) {
        return false;
      }

      let bets = game?.bets?.filter(b => b.id !== player?.id);
      bets = [...bets, { id: player?.id, bet: Number(bet), number: Number(number) }];

      await db.ref(`room/${id}/bets`).set(bets, function (error) {
        if (error) {
          console.log(error);
          return;
        }

        setNumber('');
        setBet('');
      });
    },
    [wagered, game, player, id, bet, number]
  );

  useEffect(() => {
    checkPlayersBet();
  }, [checkPlayersBet]);

  return (
    <div className='sort-and-bets'>
      {!isSorting && !checkResults && <h3>Aguardando jogadores apostarem...</h3>}
      {isSorting && !checkResults && <h3>Sorteando número...</h3>}
      {checkResults && <h3>Fazendo as contas...</h3>}

      <div className='numbers-sort'>
        {new Array(32).fill('').map((_, index) => (
          <div className={`number ${numberSort === index + 1 ? '--choice' : ''}`} key={`key-${index}`}>
            {index + 1}
          </div>
        ))}
      </div>

      <div className='bet'>
        <form onSubmit={handleSubmitBet}>
          <input
            placeholder='Número (1 a 32)'
            type='number'
            min={1}
            max={32}
            value={number}
            onChange={handleChangeNumber}
          />
          <input placeholder={`Valor aposta R$`} type='number' value={bet} onChange={handleChangeBet} />
          <button type='submit' disabled={!bet || !number || (bet && Number(bet) > player?.money) || wagered}>
            apostar
          </button>
        </form>
      </div>

      {!!wagered && (
        <div className='bet_value'>
          <h4>
            <span>
              <MoneyFormat price={bet_value} />
            </span>{' '}
            apostado no número <span>{number_value}</span>!
          </h4>
        </div>
      )}
    </div>
  );
};

export default SortAndBets;
