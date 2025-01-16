function transitionToPage(url, containerClass) {
    const currentPage = document.querySelector(`.${containerClass}`);
    if (currentPage) {
      currentPage.classList.add('fade-out1');
      setTimeout(() => {
        window.location.href = url;
      }, 2000); // 2-second delay for fade-out
    } else {
      console.error(`Container with class '${containerClass}' not found.`);
    }
  }
  
  const usman = document.querySelector(".usman");
  const nana = document.querySelector(".nana");
  const adda = document.querySelector(".adda");
  const umaima = document.querySelector(".umaima");
  

  const suprise_menu = document.querySelector('.menuGrid');
  
  console.log(suprise_menu);
  console.log(usman);
  
  usman.addEventListener('click', () => {
    // Pass the target URL and the class name of the container
    transitionToPage("usman.html", "surprise-container");
  });
  nana.addEventListener('click', () => {
    // Pass the target URL and the class name of the container
    transitionToPage("nana.html", "surprise-container");
  });
  adda.addEventListener('click', () => {
    // Pass the target URL and the class name of the container
    transitionToPage("adda.html", "surprise-container");
  });
  umaima.addEventListener('click', () => {
    // Pass the target URL and the class name of the container
    transitionToPage("umaima.html", "surprise-container");
  });
  