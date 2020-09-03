import React from 'react';
import AnimatedNumber from 'animated-number-react';

const Players = ({ game, player }) => {
  const formatValue = value => value.toFixed(2);

  return (
    <div className='players'>
      {game?.players
        ?.sort((a, b) => (a.money > b.money ? -1 : 1))
        .map((u, index) => {
          const me = player?.id === u.id;

          return (
            <div className='player' key={`user-${index}`}>
              <div className='infos'>
                <div className='position'>#{index + 1}</div>
                <div className='image'>
                  <img src={u.photo} alt={u.name} />
                </div>
                <div className='info'>
                  {u.name} {me && '(Você)'}
                  <br />
                  Dinheiro: R$ <AnimatedNumber value={u.money} formatValue={formatValue} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Players;
