const faxina = (obj) => {
  return Object.keys(obj)
    .reduce((acc, key) => ((obj[key] === null || obj[key] === undefined)
      ? acc : {...acc, [key]: obj[key]}), {});
};
