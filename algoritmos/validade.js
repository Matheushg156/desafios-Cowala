const verifyDate = (dataValidade, dia) => {
  const dayOfDate = Number(dataValidade.split("T")[0].split("-")[2]);
  const dayLimit = Number(dia.split("d")[0]);
  if (dayLimit < dayOfDate) {
    return false;
  } else {
    return true;
  }
};
