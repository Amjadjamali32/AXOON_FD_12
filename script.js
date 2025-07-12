document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts");
  const errorContainer = document.getElementById("error");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }
      return response.json();
    })
    .then(posts => {
      const first10Posts = posts.slice(0, 10);
      first10Posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        postsContainer.appendChild(card);
      });
    })
    .catch(error => {
      errorContainer.textContent = `Error: ${error.message}`;
    });
});