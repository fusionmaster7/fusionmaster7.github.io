function createListItem(date, title) {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "blog-list-item");
  listItem.innerText = `${date} - ${title}`;

  return listItem;
}

function loadBlogs(blogs) {
  document
    .getElementById("blogs-list")
    .removeChild(document.getElementById("loading"));

  blogs.forEach((blog) => {
    document
      .getElementById("blogs-list-container")
      .appendChild(createListItem(blog.date, blog.title));
  });
}

fetch("/blog/blogs.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    loadBlogs(data);
  });
