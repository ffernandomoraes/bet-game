import React from 'react';
import MoneyFormat from 'components/MoneyFormat';

const Bets = ({ game, player }) => {
  const bets = game?.bets?.filter(b => b.bet > 0);

  const Historic = () => {
    if (!game?.historic) {
      return null;
    }

    return (
      <div className='history'>
        <h4>Histórico última rodada</h4>

        {game?.historic?.map(h => {
          return (
            <div className='hist' key={`hist-${h.id}`}>
              <span>{h.name}</span> {h.gain ? 'ganhou' : 'perdeu'} <MoneyFormat price={h.gain ? h.gain : h.lose} />
            </div>
          );
        })}
      </div>
    );
  };

  if (bets.length === 0) {
    return (
      <div className='bets'>
        <p>Nenhum jogador apostou ainda.</p>
        {Historic()}
      </div>
    );
  }

  return (
    <div className='bets'>
      <h4>Apostas da rodada</h4>

      {bets.map(b => {
        const me = player?.id === b.id;
        const p = game?.players?.filter(u => u.id === b.id);

        return (
          <div className='bet' key={`bet-${b.id}`}>
            {p[0].name} {me ? '(Você)' : ''} apostou <MoneyFormat price={b.bet} />
          </div>
        );
      })}

      {Historic()}
    </div>
  );
};

export default Bets;
