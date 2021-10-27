import * as ArticlesModel from './articles.js';

async function testArticlesModels() {
  let articles = await ArticlesModel.all();
  console.log('Articles count = ' + articles.length);

  // Select random index
  const index = Math.floor(Math.random() * articles.length);
  console.log(`Selected index ${index}, id = ${articles[index].id}`);

  // Get post by id
  const article = await ArticlesModel.one(articles[index].id);
  console.log(article);
}

testArticlesModels();
