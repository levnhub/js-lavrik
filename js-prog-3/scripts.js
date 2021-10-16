// Try & catch (for sync code only)

import mathOp from './math.js';

function mathRun() {
  try {
    const result = mathOp(1, 2, '+') + mathOp(1, 3, '/');
    console.log(result);
    return result;
  } catch (error) {
    // For critical errors (not suntax)
    console.error(error.message); // just message
    console.error(error.stack); // message + stack
    // throw error; // throw error to upper level
  } finally {
    console.log('math finally ');
  }
  // console.log('math done'); doesn't work in fuction if it is not wrapped by finnaly
}
mathRun();

// Spagetti/Juravli code

import * as BadApi from './api-callback.js';

BadApi.userReg(
  (res) => {
    console.log(res);

    BadApi.userAuth(
      res.id,
      (resAuth) => {
        console.log(resAuth);

        BadApi.userData(
          resAuth.token,
          (resData) => {
            console.log(resData);
          },
          (errorData) => {
            console.log(errorData.msg);
          }
        );
      },
      (errorAuth) => {
        console.log(errorAuth.msg);
      }
    );
  },
  (error) => {
    console.log(error.msg);
  }
);
