import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { useBetContext } from 'context';
import { signIn } from 'services/auth';
import { auth, db } from 'services/firebase';
import WaitingPlayers from './WaitingPlayers';
import Players from './Players';
import SortAndBets from './SortAndBets';
import Bets from './Bets';
import './styles.scss';

const Game = () => {
  const { user, setUser } = useBetContext();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);

  const [playerInGame, setPlayerInGame] = useState(false);
  const [player, setPlayer] = useState(null);

  const getData = useCallback(async () => {
    await db.ref(`room/${id}`).on(
      'value',
      record => {
        const data = record.val();
        setGame(data);

        if (user && data) {
          const hasPlayer = data?.players?.filter(p => p.id === user?.id);

          if (hasPlayer?.length > 0) {
            setPlayer(hasPlayer[0]);
          }

          setPlayerInGame(hasPlayer?.length > 0);
          setLoading(false);
        }
      },
      error => console.log(error)
    );
  }, [id, user]);

  const authUser = useCallback(async () => {
    if (user !== null) {
      getData();
      return;
    }

    await auth().onAuthStateChanged(async userGoogle => {
      if (userGoogle) {
        setUser({
          id: userGoogle.uid,
          name: userGoogle.displayName,
          photo: userGoogle.photoURL,
          email: userGoogle.email
        });

        getData();
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
      } catch (error) {
        console.log(error);
      }

      getData();
    });
  }, [setUser, getData, user]);

  useEffect(() => {
    authUser();
  }, [authUser]);

  if (loading) {
    return <Loader text='Carregando dados da partida...' />;
  }

  if (!loading && !game) {
    return <Loader text='A partida não existe!' />;
  }

  if (!loading && game?.status === 'finish') {
    return <Loader text='A partida já acabou!' />;
  }

  if (!loading && game?.status !== 'waiting players' && !playerInGame) {
    return <Loader text='Ops, a partida já foi iniciado.' />;
  }

  if (!loading && game?.status === 'waiting players') {
    return <WaitingPlayers game={game} user={user} playerInGame={playerInGame} />;
  }

  return (
    <div className='game-page'>
      <h3>{game?.name}</h3>
      <small>Cálculo de ganhos = (VALOR APOSTA * NÚMERO DE PLAYERS) + VALOR APOSTA.</small>

      <div className='content'>
        <Players game={game} player={player} />
        <SortAndBets game={game} player={player} />
        <Bets game={game} player={player} />
      </div>
    </div>
  );
};

export default Game;
