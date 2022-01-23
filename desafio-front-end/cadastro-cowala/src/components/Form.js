import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import Input from './Input';
import Button from './Button';
import getIpFromApi from '../helpers/fetchIp';
import saveInfos from '../helpers/saveInfos';
import getInfos from '../helpers/getInfos';
import clearInfos from '../helpers/clearInfos';
import './Form.css';

function Form() {
  const { name, setName, work, setWork, phone, setPhone, IP, setIP } = useContext(MyContext);

  useEffect(() => {
    const infos = getInfos();
    setName(infos.name);
    setWork(infos.work);
    setPhone(infos.phone);
    setIP(infos.IP);
  }, []);

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

  function saveForm() {
    const formData = { name, work, phone, IP };
    saveInfos(formData);
  }

  function clearInfosInLocalStorage() {
    clearInfos();
    setName('');
    setWork('');
    setPhone('');
    setIP('');
  }

  return (
    <div className="container-form">
      <form className="form">
        <Input
          id="input-name"
          label="Nome"
          className="inputStyle"
          name="name"
          placeholder="Digite seu nome"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <div className="container-inputs">
          <Input
            id="input-work"
            label="Profissão"
            className="inputStyle"
            name="work"
            placeholder="Digite sua profissão"
            value={ work }
            onChange={ ({ target }) => setWork(target.value) }
          />
          <Input
            id="input-phone"
            label="Celular"
            className="inputStyle"
            name="phone"
            placeholder="Digite seu celular"
            value={ phone }
            onChange={ ({ target }) => setPhone(maskPhone(target.value)) }
          />
        </div>
        <div className="container-inputs">
          <Input
            id="input-IP"
            label="Meu IP"
            className="inputStyle"
            name="IP"
            placeholder="Clique no botão para obter seu IP"
            value={ IP }
          />
          <Button
            label="ENCONTRAR IP"
            onClick={ handleClick }
            className="btnIP"
          />
        </div>
        <div className="container-btns">
          <Button
            label="SALVAR"
            onClick={ saveForm }
            className="btnsSalvarLimpar"
          />
          <Button
            label="LIMPAR"
            onClick={ clearInfosInLocalStorage }
            className="btnsSalvarLimpar"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;