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
// - Callback hell
// - Code shifting
// - Can't error throw

// import * as BadApi from './api-callback.js';

// BadApi.userReg(
//   (res) => {
//     console.log(res);

//     BadApi.userAuth(
//       res.id,
//       (resAuth) => {
//         console.log(resAuth);

//         BadApi.userData(
//           resAuth.token,
//           (resData) => {
//             console.log(resData);
//           },
//           (errorData) => {
//             console.log(errorData.msg);
//           }
//         );
//       },
//       (errorAuth) => {
//         console.log(errorAuth.msg);
//       }
//     );
//   },
//   (error) => {
//     console.log(error.msg);
//   }
// );

// Promise sample

const somePromise = new Promise((resolve, reject) => {
  // resolvse callback = success, reject callback = error
  window.setTimeout(() => {
    const num = Math.random();
    num > 0.5 ? resolve(num) : reject(`${num} less than 0.5`);
  }, 200);
});

somePromise.then(
  (response) => {
    console.log('Promise success', response);
  },
  (error) => {
    console.log('Promise error', error);
  }
);

// // Promise API

// import * as PromiseApi from './api-promise.js';

// PromiseApi.userReg()
//   .then((response) => {
//     console.log(response);

//     // Bad practice (don't use that!);
//     //  PromiseApi.userAuth(res.id).then((resAuth) => {
//     //    console.log(resAuth);
//     //  })

//     // return promise to next than
//     // promise chain start
//     return PromiseApi.userAuth(response.id);
//   })
//   // next than
//   .then((response) => {
//     console.log(response);
//     return PromiseApi.userData(response.token);
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   // common error handle for all
//   .catch((error) => {
//     console.log(error.msg);
//   });

// Async API
// if generationRuntiime -> import 'babel-polyfiil'

import * as AsyncApi from './api-async.js';

async function UserProcess() {
  // "await" can be only in "async"
  const regRes = await AsyncApi.userReg();
  console.log(regRes);
  const authRes = await AsyncApi.userAuth(regRes.id);
  console.log(authRes);
  const dataRes = await AsyncApi.userData(authRes.token);
  console.log(dataRes);

  // "await fetch()" for requests, that returns Promise

  return dataRes.data;
}

// One "than" must be for return
UserProcess()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
