document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.createElement("button");
  likeBtn.textContent = "👍 Like";
  likeBtn.classList.add("btn", "btn-primary", "mt-3");

  likeBtn.addEventListener("click", () => {
    alert("You liked this post!");
  });

  document.querySelector(".col-md-8").appendChild(likeBtn);
});
