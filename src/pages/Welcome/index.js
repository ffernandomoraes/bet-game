import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
  const history = useHistory();

  const onClick = path => {
    history.push(path);
  };

  return (
    <div className='welcome-page'>
      <div className='container'>
        <h3>Bem vindo!</h3>
        <p>Crie uma nova partida e aposte com seus amigos!</p>

        <div className='buttons'>
          <button onClick={() => onClick('/room/create')}>criar partida</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
