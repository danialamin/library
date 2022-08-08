function popup() {
  document.querySelector(".button_pressed_body").style.display = "flex"; //querySelector selects the specified tag
}

function popdown() {
  document.querySelector(".button_pressed_body").style.display = "none";
}

const main = document.querySelector(".main");
main.addEventListener("click", function (event) {
  if (event.target.id == "deleteBtn") {
    event.target.parentElement.remove();
  }
});

const submitBtn = document.querySelector("input[type*=submit]");
const titleTxt = document.querySelector("input[placeholder*=Title]");
const authorTxt = document.querySelector("input[placeholder*=Author]");
const pagesTxt = document.querySelector("input[placeholder*=Pages]");
const checkbox = document.querySelector("input[type*=checkbox]");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // prevents reloading of page when submit button is clicked which is default for subnit button

  const newDiv = document.createElement("div");
  const newTitle = document.createElement("p");
  const newAuthor = document.createElement("p");
  const newPages = document.createElement("p");
  const new_r_or_n = document.createElement("p");
  const newDeleteBtn = document.createElement("a");

  newDeleteBtn.setAttribute("id", "deleteBtn");

  newTitle.innerText = `"${titleTxt.value}"`;
  newAuthor.innerText = authorTxt.value;
  newPages.innerText = `${pagesTxt.value} pages`;
  newDeleteBtn.innerText = "delete";
  if (checkbox.checked) {
    new_r_or_n.innerText = "Read";
    new_r_or_n.classList.add("read");
  } else {
    new_r_or_n.innerText = "Not read";
    new_r_or_n.classList.add("notRead");
  }

  newDiv.appendChild(newTitle);
  newDiv.appendChild(newAuthor);
  newDiv.appendChild(newPages);
  newDiv.appendChild(new_r_or_n);
  newDiv.appendChild(newDeleteBtn);

  document.querySelector(".main").appendChild(newDiv);

  //
  const ronBtns = document.querySelectorAll(".main div p:nth-child(4)");
  ronBtns.forEach(function (ronBtn) {
    if (ronBtn.innerText == "Read") {
      ronBtn.classList.add("read");
    } else {
      ronBtn.classList.add("notRead");
    }
  });

  // making button_pressed_container empty again

  document.querySelector(".button_pressed_body").style.display = "none";
  titleTxt.value = "";
  authorTxt.value = "";
  pagesTxt.value = "";
  checkbox.checked = false;
});

const mainDiv = document.querySelector(".main");
mainDiv.addEventListener("click", function (event) {
  if (event.target.classList.value == "notRead") {
    event.target.classList.remove("notRead");
    event.target.classList.add("read");
    event.target.textContent = "Read";
  } else if (event.target.classList.value == "read") {
    event.target.classList.remove("read");
    event.target.classList.add("notRead");
    event.target.textContent = "Not read";
  }
});
