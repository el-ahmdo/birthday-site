function transitionToPage(url, containerClass) {
  const currentPage = document.querySelector(`.${containerClass}`);
  if (currentPage) {
    currentPage.classList.add("fade-out1");
    setTimeout(() => {
      window.location.href = url;
    }, 2000); // 2-second delay for fade-out
  } else {
    console.error(`Container with class '${containerClass}' not found.`);
  }
}

const maa = document.querySelector(".maa");
const mama = document.querySelector(".mama");
const bae = document.querySelector(".bae");
const mamanmanal = document.querySelector(".mammanmanal");
const noor = document.querySelector(".noor");
const ameer = document.querySelector(".ameer");
const blank = document.querySelector(".blank");

const suprise_menu = document.querySelector(".menuGrid");

maa.addEventListener("click", () => {
  // Pass the target URL and the class name of the container
  transitionToPage("maa.html", "surprise-container");
});
mama.addEventListener("click", () => {
  // Pass the target URL and the class name of the container
  transitionToPage("mama.html", "surprise-container");
});
bae.addEventListener("click", () => {
  // Pass the target URL and the class name of the container
  transitionToPage("bae.html", "surprise-container");
});
mamanmanal.addEventListener("click", () => {
  // Pass the target URL and the class name of the container
  transitionToPage("mammanmanal.html", "surprise-container");
});
noor.addEventListener("click", () => {
  // Pass the target URL and the class name of the container
  transitionToPage("noor.html", "surprise-container");
});
ameer.addEventListener("click", () => {
  // Pass the target URL and the class name of the container
  transitionToPage("ameer.html", "surprise-container");
});
blank.addEventListener("click", () => {
  // Pass the target URL and the class name of the container
  transitionToPage("", "surprise-container");
});
