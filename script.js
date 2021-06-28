const headings = document.querySelectorAll(".heading");

headings.forEach((heading) => {
  heading.addEventListener("click", () => {
    heading.parentElement.children[1].classList.toggle("hidden");
  });
});
