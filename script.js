// ================= PAGE TRANSITIONS =================
function transitionToPage(url, selector) {
  const currentPage = document.querySelector(selector);
  if (!currentPage) return;

  currentPage.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 2000);
}

// ================= PAGE 1 =================
const inputField = document.getElementById("codeInput");
const accessContainer = document.getElementById("accessContainer");
const accessGrantedBox = document.getElementById("accessGrantedBox");

function appendToInput(value) {
  if (!inputField) return;
  if (inputField.value.length < 4) {
    inputField.value += value;
  }
}

function clearInput() {
  if (!inputField) return;
  inputField.value = "";
}

function checkAccess() {
  if (!inputField) return;

  const correctCode = "2016";

  if (inputField.value === correctCode) {
    accessContainer.style.display = "none";
    accessGrantedBox.classList.remove("hidden");

    setTimeout(() => {
      transitionToPage("menu.html", "#accessGrantedBox");
    }, 2000);
  } else {
    alert("Access Denied! Incorrect Code.");
    inputField.value = "";
  }
}

// ================= PAGE 2 =================
const inputField2 = document.getElementById("codeInput2");
const accessContainer2 = document.getElementById("accessContainer2");
const accessGrantedBox2 = document.getElementById("accessGrantedBox2");

function appendToInput2(value) {
  if (!inputField2) return;
  if (inputField2.value.length < 4) {
    inputField2.value += value;
  }
}

function clearInput2() {
  if (!inputField2) return;
  inputField2.value = "";
}

function checkAccess2() {
  if (!inputField2) return;

  const correctCode = "0406";

  if (inputField2.value === correctCode) {
    accessContainer2.style.display = "none";
    accessGrantedBox2.classList.remove("hidden");

    setTimeout(() => {
      transitionToPage("Bun.html", "#accessGrantedBox2");
    }, 2000);
  } else {
    alert("Access Denied! Incorrect Code.");
    inputField2.value = "";
  }
}
