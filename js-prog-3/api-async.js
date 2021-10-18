// data request simulation
function TimeoutPromise(time) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, time); // always executed, "rejected" don't need
  });
}

const randomInt = 0.5; // Procent of success/fail

async function userReg() {
  // Timeout promising
  return TimeoutPromise(500).then(() => {
    if (Math.random() > randomInt) {
      return {
        // same as resolve in Promise
        msg: '+ registration',
        id: 1,
      };
    } else {
      // same as reject in Promise
      throw new Error('error in registration');
    }
  });
}

async function userAuth(id) {
  return TimeoutPromise(500).then(() => {
    if (Math.random() > randomInt) {
      return {
        msg: `+ auth ${id}`,
        token: 'dsflkjsdfkljasd',
      };
    } else {
      throw new Error('error in auth');
    }
  });
}

async function userData(token) {
  return TimeoutPromise(500).then(() => {
    if (Math.random() > randomInt) {
      return {
        msg: `+ data by token ${token}`,
        data: {
          id: 1,
          name: 'Some',
        },
      };
    } else {
      throw new Error('error in data');
    }
  });
}

export { userReg, userAuth, userData };
