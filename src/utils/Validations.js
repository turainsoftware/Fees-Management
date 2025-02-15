const isValidMobile = (number) => /^[6-9]\d{9}$/.test(number);

const isValidName = (name) => {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]*$/;
  return nameRegex.test(name);
};

const checkOnChangeMobile = (val) => {
  const numRegex = /^\d*$/;
  return numRegex.test(val) && val[0] >= 6 && val[0] <= 9;
};

export { isValidMobile, isValidName, checkOnChangeMobile };
