const saveInfos = (infos) => {
  localStorage.setItem('infos', JSON.stringify(infos));
};

export default saveInfos;