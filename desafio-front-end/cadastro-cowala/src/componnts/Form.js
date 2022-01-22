import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Input from './Input';

function Form() {
  const { name, setName, work, setWork } = useContext(MyContext);

  return (
    <div>
      <Input
        id="input-name"
        label="Nome"
        name="name"
        placeholder="Digite seu nome"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
      <Input
        id="input-work"
        label="Profissão"
        name="work"
        placeholder="Digite sua profissão"
        value={ work }
        onChange={ ({ target }) => setWork(target.value) }
      />
    </div>
  );
}

export default Form;