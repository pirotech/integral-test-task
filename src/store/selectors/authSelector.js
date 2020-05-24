const authSelector = {
  getToken: state => {
    return state.auth.token;
  },
  getAuthorized: state => {
    return !!state.auth.token;
  }
};

export default authSelector;
