const getInfos = () => {
  const infos = JSON.parse(localStorage.getItem('infos')) || {};
  return infos;
};

export default getInfos;