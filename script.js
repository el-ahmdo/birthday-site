// Function to handle the page transition with fade-out effect
function transitionToPage(url) {
  const currentPage = document.querySelector(".container");
  currentPage.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 2000); // 2-second delay for fade-out
}

function transitionToPage1(url) {
  const currentPage = document.querySelector("#accessGrantedBox");
  currentPage.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 2000); // 2-second delay for fade-out
}

function transitionToPage2(url) {
  const currentPage = document.querySelector("#question-container");
  currentPage.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 2000); // 2-second delay for fade-out
}

// References to elements  for page 2
const inputField = document.getElementById("codeInput");
const accessContainer = document.getElementById("accessContainer");
const accessGrantedBox = document.getElementById("accessGrantedBox");

// Function to append numbers to the input field
function appendToInput(value) {
  if (inputField.value.length < 4) {
    inputField.value += value;
  }
}

function clearInput() {
  // Changed from `clear` to avoid potential conflicts
  codeInput.value = "";
}

// Function to check the entered code and transition if correct
function checkAccess() {
  const correctCode = "2016";

  if (inputField.value === correctCode) {
    // Hide the access container and show the "Access Granted" box
    accessContainer.style.display = "none";
    accessGrantedBox.classList.remove("hidden");

    // Keep the "Access Granted" box visible for 2 seconds before redirecting
    setTimeout(() => {
      transitionToPage1("menu.html");
    }, 2000);
  } else {
    // Show an alert for incorrect code and clear the input
    alert("Access Denied! Incorrect Code.");
    inputField.value = "";
  }
}
//end of page 1 scripts

//question quiz
