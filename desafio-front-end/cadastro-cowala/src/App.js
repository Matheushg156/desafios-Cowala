import React from 'react';
import MyProvider from './context/MyProvider';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
   <MyProvider>
     <Header />
     <Form />
   </MyProvider>
  );
}

export default App;
