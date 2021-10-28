import * as ArticlesModel from './articles.js';

async function testArticlesModels() {
  const articles = await ArticlesModel.all();
  console.log('Articles count = ' + articles.length);

  // Select random index
  const index = Math.floor(Math.random() * articles.length);
  console.log(`Selected index ${index}, id = ${articles[index].id}`);

  // Get post by id
  const article = await ArticlesModel.one(articles[index].id);
  console.log('Get post', article);

  // Below doesn't work without real api

  // Remove post by id
  // const removeRes = await ArticlesModel.remove(article.id);
  // console.log('Delete post', removeRes);

  // Get updated post list
  // const articlesNewList = await ArticlesModel.all();
  // console.log('Articles new count = ' + articlesNewList.length);

  // Add post
  // const addRes = await ArticlesModel.add({
  //   title: article.title,
  //   content: article.content + ' + add',
  // });
  // console.log('Post add', +addRes);

  // Get updated post list
  // const articlesNewestList = await ArticlesModel.all();
  // console.log('Articles newest count = ' + articlesNewestList.length);

  // Select random index 2
  // const index2 = Math.floor(Math.random() * articles.length);
  // const newArticle = articles[index2];
  // console.log(
  //   `Selected index ${index2}, new article id = ${articles[index2].id}`
  // );

  // // Edit post
  // const editRes = await ArticlesModel.edit(newArticle.id, {
  //   title: newArticle.title,
  //   content: newArticle.content + ' + add',
  // });

  // console.log('Edit post', editRes);
}

testArticlesModels();
