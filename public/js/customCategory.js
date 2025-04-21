const Category = document.getElementById("category");
Category.addEventListener("change", function () {
  const customCategoryDiv = document.getElementById("customCategoryDiv");

  if (this.value === "other") {
    customCategoryDiv.style.display = "block";
  } else {
    customCategoryDiv.style.display = "none";
  }
});
