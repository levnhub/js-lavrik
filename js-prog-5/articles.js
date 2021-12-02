function makeRequest(url, options = {}) {
  // add headers if needed
  // if ('headers' in options) options.headers = {};
  // options.headers.Authorization = '';

  return fetch(url, options).then((response) => {
    if (response.status !== 200) {
      return response.text().then((text) => {
        throw new Error(text);
      });
    }

    return response.json();
  });
}

const url = '/js-frontend-api/test.php';

async function all() {
  // fetch with json() method return Promise too, it is no good practice
  // need write handle func above
  // const response = await fetch('/js-frontend-api/test.php');
  // response.json().then((data) => {
  //   console.log(data);
  // });

  const data = await makeRequest(url);
  return data;
}

async function one(id) {
  const data = await makeRequest(`${url}?id=${id}`);
  return data;
}

async function remove(id) {
  const data = await makeRequest(`${url}?id=${id}`, {
    method: 'DELETE',
  });
  return data;
}

async function add(article) {
  const formData = new FormData();
  // parse HTML from ca use, or
  // let myForm = document.getElementById('myForm');
  // let formData = new FormData(myForm);

  for (const name in article) {
    formData.append(name, article[name]);
  }

  const data = await makeRequest(url, {
    method: 'POST',
    body: formData,
  });
  return data;
}

async function edit(id, article) {
  const newArticle = {
    ...article,
    id,
  };
  const data = await makeRequest(url, {
    method: 'PUT',
    body: JSON.stringify(newArticle), // data to string
  });
  return data;
}

export { all, one, remove, add, edit };

// get — получение
// post — запись
// delete — удаление
// put — обновление

// GET articles.php -> все статьи в виде массива

// GET articles.php?id=int -> одна статья в виде объекта || 404

// DELETE articles.php?id=int  -> true || false, если статья не найдена

// POST articles.php -> id, валидация не предусмотрена
// 	body-formData(title, content)

// PUT articles.php -> true || false, если статья не найдена
// 	body-json(id, title, content)

// You can write your own Class against Axios, because Fetch is modernest than xhr
