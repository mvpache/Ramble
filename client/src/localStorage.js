// TODO rework this to save/get token from local storage

/*
export const loadToken = () => {
  try {
    const serializedState = localStorage.getItem('TOKEN');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveToken = token => {
  try {
    const serializedState = JSON.stringify(token);
    localStorage.setItem('TOKEN', serializedState);
  } catch (err) {
    console.log(err);
  }
};

store.subscribe(() => { //listens to any state change and updates
  saveToken({
    token: store.getState().token //here is where I would grab token and update that
  });
}); //can use throttle to slow running

store.subscribe(() =>
  localStorage.setItem('TOKEN', store.getState().token);
})

const requestOptions = { //send with get on protected routes
  headers: {
    Authorization: `Bearer ${token}`
  }
}
*/
