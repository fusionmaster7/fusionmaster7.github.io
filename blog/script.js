function createListItem(date, title, index) {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "blog-list-item");
  const anchorTag = document.createElement("a");
  listItem.innerHTML = `${date} - <a href="/blog/posts/${index}.html">${title}</a>`;

  return listItem;
}

function loadBlogs(blogs) {
  document
    .getElementById("blogs-list")
    .removeChild(document.getElementById("loading"));

  blogs.forEach((blog, index) => {
    document
      .getElementById("blogs-list-container")
      .appendChild(createListItem(blog.date, blog.title, index));
  });
}

fetch("/blog/blogs.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    loadBlogs(data);
  });
