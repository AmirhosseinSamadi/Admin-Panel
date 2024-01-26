// const product__add = document.querySelector(".product__add");
// const navCloseBtn = document.querySelector(".nav-close-btn");
// product__add.addEventListener("click", ()=>{
//   product__addCard.InnerHTML = `
//   productname
//   category
//   price
//   `
   
//   overlay.classList.add("overlay--visible")
// })
const productAdd = document.getElementById("xyz");
const addProductBtn = document.getElementById("addProductBtn");

addProductBtn.addEventListener("click", ()=>{
  productAdd.classList.add("product__card")
  productAdd.style.visibility = "visible";
});

const categoryAdd = document.getElementById("catcc");
const addCategoryBtn = document.getElementById("addCategoryBtn");

addCategoryBtn.addEventListener("click", ()=>{
    categoryAdd.style.visibility = "visible";
  categoryAdd.classList.add("category__card")
});

const productEdit = document.getElementById("pe");
const EditProductBtn = document.getElementById("editProductBtn");

EditProductBtn.addEventListener("click", ()=>{
    productEdit.classList.add("product__card")
    productEdit.style.visibility = "visible";
});

const categoryEdit = document.getElementById("ce");
const EditCategoryBtn = document.getElementById("editCategoryBtn");

EditCategoryBtn.addEventListener("click", ()=>{
    categoryEdit.style.visibility = "visible";
    categoryEdit.classList.add("category__card")
});