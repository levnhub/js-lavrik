// Ajax simulator

// callbacks on jQuery
// $.ajax({
// 	onSuccess
// 	onComplete
// 	onError
// })

// Vanilla
function userReg(onSuccess, onError) {
  window.setTimeout(() => {
    if (Math.random() > 0.2) {
      // Percentage random 80% is true and 20% is false
      onSuccess({
        msg: '+ registration',
        id: 1,
      });
    } else {
      onError({ msg: 'error in registration' });
    }
  }, 500);
}

function userAuth(id, onSuccess, onError) {
  window.setTimeout(() => {
    if (Math.random() > 0.2) {
      onSuccess({
        msg: `+ auth ${id}`,
        token: 'dsflkjsdfkljasd',
      });
    } else {
      onError({ msg: 'error in auth' });
    }
  }, 500);
}

function userData(token, onSuccess, onError) {
  window.setTimeout(() => {
    if (Math.random() > 0.2) {
      onSuccess({
        msg: `+ data by token ${token}`,
        data: {
          id: 1,
          name: 'Some',
        },
      });
    } else {
      onError({ msg: 'error in data' });
    }
  }, 500);
}

export { userReg, userAuth, userData };
