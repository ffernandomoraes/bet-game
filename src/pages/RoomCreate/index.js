import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss';
import Loader from 'components/Loader';
import { useBetContext } from 'context';
import { signIn } from 'services/auth';
import { auth, db } from 'services/firebase';
import { useHistory } from 'react-router-dom';

const RoomCreate = () => {
  const { user, setUser } = useBetContext();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [room, setRoom] = useState('');

  const authUser = useCallback(() => {
    auth().onAuthStateChanged(async userGoogle => {
      if (userGoogle) {
        setUser({
          id: userGoogle.uid,
          name: userGoogle.displayName,
          photo: userGoogle.photoURL,
          email: userGoogle.email
        });
        setLoading(false);
        return;
      }

      try {
        const response = await signIn();

        setUser({
          id: response.user.uid,
          name: response.user.displayName,
          photo: response.user.photoURL,
          email: response.user.email
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    });
  }, [setUser]);

  const handleChangeField = e => setRoom(e.target.value);

  const onSubmit = async e => {
    setSubmit(true);
    e.preventDefault();

    try {
      const query = await db.ref('room').push({
        owner: { id: user.id, name: user.name, email: user.email },
        name: room,
        players: [
          {
            id: user.id,
            name: user.name,
            photo: user.photo,
            money: 5000
          }
        ],
        numbersDrawn: null,
        bets: null,
        status: 'waiting players'
      });

      history.push(`/game/${query.key}`);
    } catch (error) {
      setSubmit(false);
      console.log(error);
    }
  };

  useEffect(() => {
    authUser();
  }, [authUser]);

  if (loading) {
    return <Loader text='Autenticando, aguarde...' />;
  }

  return (
    <div className='room-create-page'>
      <h3>Olá {user.name}.</h3>
      <p>Insira o nome da sua partida para criar uma sala.</p>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          value={room}
          onChange={handleChangeField}
          placeholder='Nome da sala'
          autoComplete='off'
        />

        <button type='submit' disabled={!room || submit}>
          criar sala
        </button>
      </form>
    </div>
  );
};

export default RoomCreate;
