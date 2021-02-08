export const verifyLogin = (userName = '', userPass = '') => {
  const lengthPass = userPass.length;
  const minLength = 6;
  const regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (lengthPass > minLength && regEmail.test(userName)) {
    return true;
  }

  return false;
};

export const saveTokens = () => {
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
};
