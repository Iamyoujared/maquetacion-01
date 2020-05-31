import { articlesMock } from "./articlesMock.js";

// Function to render how article list
const renderContent = () => {
  return articlesMock
    .map(
      ({ date, author, comments, article: { title, description } }) => `
      <article class="articles_item">
        <div>
          <ul class="articles_item_info">
            <li>${date}</li>
            <li>Por <a href="/">${author}</a></li>
            <li>${comments} comentarios</li>
          </ul>
        </div>
        <div>
          <h2 class="articles_item_title">${title}</h2>
          <p class="articles_item_description">
          ${description}
          </p>
          <a href="/">Leer más</a>
        </div>
      </article>
    `
    )
    .join("");
};

// Insert article list into the element with id "articles"
document
  .getElementById("articles")
  .insertAdjacentHTML("beforeend", renderContent());
