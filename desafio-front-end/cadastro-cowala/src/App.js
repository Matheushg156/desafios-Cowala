import React from 'react';
import MyProvider from './context/MyProvider';
import Header from './componnts/Header';

function App() {
  return (
   <MyProvider>
     <Header />
   </MyProvider>
  );
}

export default App;
