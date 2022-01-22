import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Input from './Input';

function Form() {
  const { name, setName, work, setWork, phone, setPhone } = useContext(MyContext);

  function maskPhone(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

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
      <Input
        id="input-phone"
        label="Celular"
        name="phone"
        placeholder="Digite seu celular"
        value={ phone }
        onChange={ ({ target }) => setPhone(maskPhone(target.value)) }
      />
    </div>
  );
}

export default Form;