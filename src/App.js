import React from 'react';
import {MyContextProvider} from './context/MyContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <Header />
        <Main />
        <Footer />
      </MyContextProvider>
    </div>
  );
}
export default App;