
// const API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

const API_KEY = "1767c62fb3dc4bae87183082b70f7340";

// Get the form element
const form = document.querySelector('#news-form');

// Get the news container element
const newsContainer = document.querySelector('#newsContainer');

// Add an event listener to the form to listen for submit events
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the selected category value
  const category = document.querySelector('#category').value;

  // Make a GET request to the news API with the selected category
  fetch(`https://api.codetabs.com/v1/proxy?quest=https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}`, {
    method: "GET",
    contentType: 'application/json'
  })
    .then(response => response.json())
    .then((data) => {

      // console.log(data);

      // Clear the news container
      newsContainer.innerHTML = '';

      // Loop through the articles and create a news item for each one
      data.articles.forEach((article) => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
        <img src="${article.urlToImage}" alt="${article.title}">
        <div class="news-info">
          <h3>${article.title}</h3>
          <p class="author">${article.author}</p>
          <p>${article.description}</p>
          <div class="url">
            <a href="${article.url}" target="_blank">Read more</a>
          </div>
        </div>
      `;

        newsContainer.appendChild(newsItem);
      });
    });
});


