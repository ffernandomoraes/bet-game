import React, { useState } from 'react';
import 'assets/styles.scss';
import Routes from 'pages/routes';
import BetContextProvider from 'context';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BetContextProvider value={{ user, setUser }}>
      <Routes />
    </BetContextProvider>
  );
};

export default App;
