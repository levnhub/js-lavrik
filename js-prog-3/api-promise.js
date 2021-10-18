import mathOp from './math.js';

const randomInt = 0.2;

function userReg() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      // you can use try...catch inside promise x)
      // try {
      //   mathOp(1, 0, '/');
      // } catch (error) {
      //   reject({ msg: error.message });
      // }
      //

      if (Math.random() > randomInt) {
        // Percentage random 80% is true and 20% is false
        resolve({
          msg: '+ registration',
          id: 1,
        });
      } else {
        reject({ msg: 'error in registration' });
      }
    }, 500);
  });
}

function userAuth(id) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (Math.random() > randomInt) {
        resolve({
          msg: `+ auth ${id}`,
          token: 'dsflkjsdfkljasd',
        });
      } else {
        reject({ msg: 'error in auth' });
      }
    }, 500);
  });
}

function userData(token) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (Math.random() > randomInt) {
        resolve({
          msg: `+ data by token ${token}`,
          data: {
            id: 1,
            name: 'Some',
          },
        });
      } else {
        reject({ msg: 'error in data' });
      }
    }, 500);
  });
}

export { userReg, userAuth, userData };
