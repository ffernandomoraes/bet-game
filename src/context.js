import { createContext, useContext } from 'react';

const BetContext = createContext({});
const BetContextProvider = BetContext.Provider;

export function useBetContext() {
  const context = useContext(BetContext);
  return context;
}

export default BetContextProvider;
