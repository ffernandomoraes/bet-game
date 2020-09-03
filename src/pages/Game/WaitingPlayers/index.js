import React, { useCallback } from 'react';
import MoneyFormat from 'components/MoneyFormat';
import { useParams } from 'react-router-dom';
import { db } from 'services/firebase';

const WaitingGame = ({ game, user, playerInGame }) => {
  const { id } = useParams();

  const owner = user?.id === game?.owner?.id;

  const handleClickExit = useCallback(async () => {
    const newPlayers = game?.players?.filter(p => p.id !== user?.id);
    await db.ref(`room/${id}/players`).set(newPlayers);
  }, [game, id, user]);

  const handleClickEntryGame = useCallback(async () => {
    const newPlayers = [
      ...game?.players,
      {
        id: user?.id,
        name: user?.name,
        photo: user?.photo,
        money: 5000
      }
    ];

    await db.ref(`room/${id}/players`).update(newPlayers);
  }, [id, user, game]);

  const startGame = useCallback(async () => {
    const bets = game?.players?.map(u => ({ id: u.id, bet: 0 }));
    const generateNumber = () => Math.floor(Math.random() * (32 - 1 + 1) + 1);

    await db.ref(`room/${id}`).update({
      status: 'in progress',
      round: 1,
      bets,
      numberWin: generateNumber()
    });
  }, [id, game]);

  return (
    <div className='game-page-select'>
      <div className='content'>
        <h3>{game?.name}</h3>

        <br />

        <div className='link'>
          {owner && <h4>Compartilhe o link com seus amigos!</h4>}
          {!owner && <h4>Aguardando o dono da partida começar!</h4>}
          <input type='text' name='link' value={window.location.href} readOnly />
        </div>

        {owner && (
          <div className='start-game'>
            <button disabled={game?.players?.length === 1} onClick={startGame}>
              iniciar partida
            </button>
          </div>
        )}

        <div className='players'>
          <h4>Jogadores da partida ({game?.players?.length})</h4>

          {game?.players?.map((u, index) => {
            const me = user?.id === u.id;

            return (
              <div className='player' key={`user-${index}`}>
                <div className='infos'>
                  <div className='image'>
                    <img src={u.photo} alt={u.name} />
                  </div>

                  <div className='info'>
                    {u.name} {me && '(Você)'} {!me && u.id === game?.owner?.id && '(Dono)'}
                    <br />
                    Dinheiro: <MoneyFormat price={u.money} />
                  </div>
                </div>

                {me && !owner && (
                  <div className='exit'>
                    <span onClick={handleClickExit}>sair</span>
                  </div>
                )}
              </div>
            );
          })}

          {!playerInGame && (
            <div className='entry-game'>
              <button onClick={handleClickEntryGame}>participar da partida</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitingGame;
