function adicionaZero(numero) {
  const maxBase = 9;
  if (numero <= maxBase) return `0${numero}`;
  return numero;
}

const dateBrModel = () => {
  const actualDate = new Date();
  const dayDate = adicionaZero(actualDate.getDate()).toString();
  const monthDate = adicionaZero(actualDate.getMonth() + 1).toString();
  const yearDate = actualDate.getFullYear();
  const formatDate = `${dayDate}/${monthDate}/${yearDate}`;
  return formatDate;
};

export default dateBrModel;
