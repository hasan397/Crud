var bookMarkName = document.getElementById("bookMarkName");
var siteUrl = document.getElementById("siteUrl");
var submit = document.getElementById("Submit");
var rowData = document.getElementById("rowData");
var visit = document.getElementById("visit");
var deleteEl = document.getElementById("deleteEl");
var layer = document.getElementById("layer");
var booksList = [];
if (localStorage.getItem("books") != null) {
  booksList = JSON.parse(localStorage.getItem("books"));
  display();
}
function addproduct() {
  if (bookMarkName.value != "" && siteUrl.value != "") {
    var product = {
      code: bookMarkName.value,
      data: siteUrl.value,
    };
    booksList.push(product);
    localStorage.setItem("books", JSON.stringify(booksList));
    display();
    clearInputs();
    bookMarkName.classList.remove("is-valid")
    siteUrl.classList.remove("is-valid")
  } else {
    layer.classList.add("d-block");
  }
}
layer.onclick = function () {
  layer.classList.remove("d-block");
};
function display() {
  var cartona = `
  <div class="col-md-3 p-3">Index</div>
          <div class="col-md-3 p-3">Website Name</div>
          <div class="col-md-3 p-3">Visit</div>
          <div class="col-md-3 p-3">Delete</div>
          <hr class="p-0 m-0">
  `;
  for (var i = 0; i < booksList.length; i++) {
    cartona += `
    <div class="col-md-3 p-3">${i + 1}</div>
          <div class="col-md-3 p-3">${booksList[i].code}</div>
          <div class="col-md-3 p-3"><button id="visit" onclick="visitPage(${i})" class="btn btn-success"><i class="fas fa-eye pe-2"></i> Visit</button></div>
          <div class="col-md-3 p-3"><button id="deleteEl" onclick="deletePage(${i})" class="btn btn-danger"><i class="fas fa-trash pe-2"></i> Delete</button></div>
          <hr class="p-0 m-0">
        </div>
    `;
  }
  rowData.innerHTML = cartona;
}
function clearInputs() {
  bookMarkName.value = "";
  siteUrl.value = "";
}
function visitPage(index) {
  window.open(booksList[index].data, "_blank");
}
function deletePage(index) {
  booksList.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(booksList));
  display();
}
function valid() {
  bookMarkName.classList.add("is-invalid");
  if (bookMarkName.value.length >= 3 && bookMarkName.value.length <= 20) {
    bookMarkName.classList.remove("is-invalid");
    bookMarkName.classList.add("is-valid");
  }
}
function validURL(){
  siteUrl.classList.add("is-invalid");
  if(((siteUrl.value.startsWith("https://")||siteUrl.value.startsWith("Https://")) || (siteUrl.value.startsWith("http://")||siteUrl.value.startsWith("Http://"))) && (siteUrl.value.includes(".")) ){
    siteUrl.classList.remove("is-invalid");
    siteUrl.classList.add("is-valid");
  }
}
/* 
 <div class="col-md-3 p-3">Index</div>
        <div class="col-md-3 p-3">Website Name</div>
        <div class="col-md-3 p-3"><button id="visit" class="btn btn-success"><i class="fas fa-eye pe-2"></i> Visit</button></div>
        <div class="col-md-3 p-3"><button id="deleteEl" class="btn btn-danger"><i class="fas fa-trash pe-2"></i> Delete</button></div>
        <hr class="p-0 m-0">
      </div>
*/
