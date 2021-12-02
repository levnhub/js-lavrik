import server from './server.js';

async function all() {
  const response = await server.get('test.php');
  return response.data;
}

async function one(id) {
  const response = await server.get('test.php', {
    params: { id },
  });
  return response.data;
}

async function remove(id) {
  const response = await server.delete('test.php', {
    params: { id },
  });
  return response.data;
}

async function add(article) {
  const formData = new FormData();
  // parse HTML from ca use, or
  // let myForm = document.getElementById('myForm');
  // let formData = new FormData(myForm);

  for (const name in article) {
    formData.append(name, article[name]);
  }

  const response = await server.post('test.php', formData); // To $_POST in PHP
  // const response = await server.post('test.php', article); // To JSON
  return response.data;
}

async function edit(id, article) {
  const newArticle = {
    ...article,
    id,
  };
  const response = await server.put('test.php', { ...article, id });
  return response.data;
}

export { all, one, remove, add, edit };
