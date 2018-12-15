export const verifyToken = token => {
  // fetch to api to verify the token
  console.log("api");
  if (Math.floor((Math.random() * 10) % 3) > 0) {
    return true;
  } else {
    return false;
  }
};

export const saveToken = async token => {
  await localStorage.setItem("jwt", token);
};

export const removeToken = async () => {
  await localStorage.removeItem("jwt");
};
