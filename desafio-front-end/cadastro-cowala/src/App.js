import React from 'react';
import MyProvider from './context/MyProvider';
import Header from './componnts/Header';
import Form from './componnts/Form';

function App() {
  return (
   <MyProvider>
     <Header />
     <Form />
   </MyProvider>
  );
}

export default App;
