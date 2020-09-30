// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from "../data/data";

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

const articleMaker = (article) => {
  const articleContainer = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const first = document.createElement("p");
  const second = document.createElement("p");
  const third = document.createElement("p");
  const button = document.createElement("button");

  articleTitle.textContent = article.title;
  articleDate.textContant = article.date;
  first.textContent = article.firstParagraph;
  second.textContent = article.secondParagraph;
  third.textContent = article.thirdParagraph;
  button.textContent = "+";

  articleContainer.appendChild(articleTitle);
  articleContainer.appendChild(articleDate);
  articleContainer.appendChild(first);
  articleContainer.appendChild(second);
  articleContainer.appendChild(third);
  articleContainer.appendChild(button);

  articleContainer.classList.add("article");
  articleDate.classList.add("date");
  button.classList.add("expandButton");

  return articleContainer;
};

data.forEach((art) => {
  let nextArticle = articleMaker(art);
  document.body.appendChild(nextArticle);
});
