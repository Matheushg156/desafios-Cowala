import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Input from './Input';
import Button from './Button';
import getIpFromApi from '../helpers/fetchIp';
import './Form.css';

function Form() {
  const { name, setName, work, setWork, phone, setPhone, IP, setIP } = useContext(MyContext);

  function maskPhone(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  async function handleClick() {
    const IPFromApi = await getIpFromApi();
    setIP(IPFromApi);
  }

  return (
    <div className="container-form">
      <Input
        id="input-name"
        label="Nome"
        name="name"
        placeholder="Digite seu nome"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
      <div className="container-inputs">
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
      <div>
        <Input
          id="input-IP"
          label="Meu IP"
          name="IP"
          placeholder="Clique no botão para obter seu IP"
          value={ IP }
        />
        <Button
          label="Salvar"
          onClick={ handleClick }
        />
      </div>
    </div>
  );
}

export default Form;