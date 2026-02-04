document.addEventListener("DOMContentLoaded", () => {
  function transitionToPage(url, container) {
    const currentPage = document.querySelector(`.${container}`);
    currentPage.classList.add("fade-out1");
    setTimeout(() => {
      window.location.href = url;
    }, 2000); // 2-second delay for fade-out
  }
  //trasnsition from menu to photos of us
  const photoOfUs = document.querySelector(".photos");

  if (photoOfUs) {
    photoOfUs.addEventListener("click", () => {
      transitionToPage("photos.html", "menuGrid");
    });
  }

  //loading images

  const images = [
    { src: "images/image29.JPG" },
    { src: "images/image30.JPG" },
    { src: "images/image31.JPG" },
    { src: "images/Image3.JPG" },
    { src: "images/image33.JPG" },
    { src: "images/image34.JPG" },
    { src: "images/image35.JPG" },
    { src: "images/image36.JPG" },
    { src: "images/image38.JPG" },
    { src: "images/Image1.PNG" },
    { src: "images/Image10.JPG" },
    { src: "images/Image11.JPG" },
    { src: "images/Image13.JPG" },
    { src: "images/Image14.JPG" },
    { src: "images/Image15.JPG" },
    { src: "images/Image16.JPG" },
    { src: "images/Image17.JPG" },
    { src: "images/Image19.JPG" },
    { src: "images/Image18.JPG" },
    { src: "images/Image2.PNG" },
    { src: "images/Image20.JPG" },
    { src: "images/Image21.JPG" },
    { src: "images/Image22.JPG" },

    { src: "images/Image3.JPG" },
    { src: "images/Image4.PNG" },
    { src: "images/Image5.PNG" },
    { src: "images/Image6.JPG" },
    { src: "images/Image8.JPG" },
    { src: "images/Image7.JPG" },
    { src: "images/IMG_4640.JPG" },
    { src: "images/IMG_4642.JPG" },
    { src: "images/IMG_4643.JPG" },
    { src: "images/IMG_7035.JPG" },
    { src: "images/image24.JPG" },
    { src: "images/image25.JPG" },
    { src: "images/image26.JPG" },
    { src: "images/image27.JPG" },
    { src: "images/image28.JPG" },
  ];

  const videos = [
    { src: "vides/vid2.MOV" },
    { src: "vides/vid3.MOV" },
    { src: "vides/vid4.MOV" },
    { src: "vides/vid5.MOV" },
    { src: "vides/vid1.mp4" },
    { src: "vides/vid7.MOV" },
    { src: "vides/vid8.MOV" },
    { src: "vides/vid9.MOV" },
    { src: "vides/vid10.MOV" },
  ];

  const imageContainer = document.getElementById("imageContainer");

  // Loop through the images array
  const loadImages = () => {
    images.map((image) => {
      // Create a div to wrap the image
      const imageDiv = document.createElement("div");

      // Create an img element
      const img = document.createElement("img");
      img.src = image.src; // Set the source of the image

      // Optional: Style the image
      img.style.width = "100%";
      img.style.height = "100%";

      // Append the image to the div
      imageDiv.appendChild(img);

      // Append the div to the container
      imageContainer.append(imageDiv);
    });
  };
  loadImages();

  const loadVideos = () => {
    const vidContainer = document.getElementById("vidcontainer");

    if (!vidContainer) {
      console.error("Video container not found");
      return;
    }

    videos.forEach((vid) => {
      const wrapper = document.createElement("div");

      const video = document.createElement("video");
      video.src = vid.src;
      video.controls = true;
      video.width = 280;
      video.height = 280;
      video.preload = "metadata";

      wrapper.appendChild(video);
      vidContainer.appendChild(wrapper);
    });
  };
  loadVideos();
});
