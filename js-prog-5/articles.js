function makeRequest(url, options = {}) {
  return fetch(url, options).then((response) => {
    if (response.status !== 200) {
      return response.text().then((text) => {
        throw new Error(text);
      });
    }

    return response.json();
  });
}

async function all() {
  // fetch with json() method return Promise too, it is no good practice
  // need write handle func above
  // const response = await fetch('/js-frontend-api/test.php');
  // response.json().then((data) => {
  //   console.log(data);
  // });

  const data = await makeRequest('/js-frontend-api/test.php');
  return data;
}

async function one(id) {
  const data = await makeRequest(`/js-frontend-api/test.php?id=${id}`);
  return data;
}

async function remove(id) {}

export { all, one, remove };

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
