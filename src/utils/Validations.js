const isValidMobile = (number) => /^[6-9]\d{9}$/.test(number);

const isValidName = (name) => {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]*$/;
  return nameRegex.test(name);
};

export { isValidMobile, isValidName };