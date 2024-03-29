import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [phone, setPhone] = useState('');
  const [IP, setIP] = useState('');

  const contextValue = {
    name,
    work,
    phone,
    IP,
    setName,
    setWork,
    setPhone,
    setIP,
  };

  return (
    <main>
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    </main>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;