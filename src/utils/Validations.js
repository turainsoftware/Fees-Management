const isValidMobile = (number) => /^[6-9]\d{9}$/.test(number);

const isValidName = (name) => {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]*$/;
  return nameRegex.test(name);
};

const checkOnChangeMobile = (val) => {
  const numRegex = /^\d*$/;
  return (
    numRegex.test(val) && (val.length === 0 || (val[0] >= 6 && val[0] <= 9))
  );
};

function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return pattern.test(email);
}

export { isValidMobile, isValidName, checkOnChangeMobile, isValidEmail };
