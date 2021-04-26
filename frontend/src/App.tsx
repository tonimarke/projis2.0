import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/global';

import AppProvider from './hook';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Routes/>
        <GlobalStyle />
      </AppProvider>
    </>
  )
}

export default App;
