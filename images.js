document.addEventListener("DOMContentLoaded", () => {


  function transitionToPage(url,container) {
    const currentPage = document.querySelector(`.${container}`);
    currentPage.classList.add('fade-out1');
    setTimeout(() => {
      window.location.href = url;
    }, 2000); // 2-second delay for fade-out
  
  }
  //trasnsition from menu to photos of us
const photoOfUs = document.querySelector('.photos');

if (photoOfUs) {
  photoOfUs.addEventListener("click", () => {
      transitionToPage('photos.html','menuGrid');

  });
}





//loading images

const images = [
  { src: 'images/zahra1.jpg' }, { src: 'images/zahra2.jpg' },
  { src: 'images/zahra3.jpg' }, { src: 'images/zahra4.jpg' },
  { src: 'images/zahra5.jpg' }, { src: 'images/zahra6.jpg' },
  { src: 'images/zahra7.jpg' }, { src: 'images/zahra8.jpg' },
  { src: 'images/zahra9.jpg' }, { src: 'images/zahra10.jpg' },
  { src: 'images/zahra11.jpg' }, { src: 'images/zahra12.jpg' },
  { src: 'images/zahra13.jpg' },  { src: 'images/zahra14.jpg' },
  
  { src: 'images/zahra15.jpg' },{ src: 'images/zahra16.jpg' },
  { src: 'images/zahra17.jpg' },{ src: 'images/zahra18.jpg' },
  { src: 'images/zahra19.jpg' },{ src: 'images/zahra10.jpg' },
  { src: 'images/zahra21.jpg' },{ src: 'images/zahra22.jpg' },
  { src: 'images/zahra23.jpg' },{ src: 'images/zahra24.png' },
  { src: 'images/zahra25.png' },{ src: 'images/zahra26.png' },
  { src: 'images/zahra27.png' },{ src: 'images/zahra28.png' },
  { src: 'images/zahra29.png' },{ src: 'images/zahra30.jpg' },

];
  const videos=[
    {src:"vides/vid1.mp4"},  {src:"vides/vid2.mp4"},
    {src:"vides/vid3.MOV"},  {src:"vides/vid4.MOV"},
    {src:"vides/vid5.MOV"},  {src:"vides/vid6.MOV"},
    {src:"vides/vid7.MOV"},  {src:"vides/vid8.MOV"},
    {src:"vides/vid9.MOV"},  {src:"vides/vid10.MOV"},
    {src:"vides/vid11.MOV"},  {src:"vides/vid12.MOV"},
    {src:"vides/vid4.MOV"},  {src:"vides/13.MOV"},




  ]

  const imageContainer = document.getElementById('imageContainer');
  const vidcontainer = document.getElementById('vidcontainer');

  
  // Loop through the images array
  const loadImages=()=>{
  images.map((image) => {
    // Create a div to wrap the image
    const imageDiv = document.createElement('div');
  
    // Create an img element
    const img = document.createElement('img');
    img.src = image.src; // Set the source of the image
  
    // Optional: Style the image
    img.style.width = '280px';
    img.style.height = '280px';
  
    // Append the image to the div
    imageDiv.appendChild(img);
  
    // Append the div to the container
    imageContainer.append(imageDiv);

  });
}
loadImages()


const loadVids = () => {
  // Ensure the container exists
  const videoContainer = document.querySelector(".videos-container");

  if (!videoContainer) {
    console.error("Error: '.video-container' not found.");
    return;
  }

  videos.forEach((video) => {
    // Create a div to wrap the video
    const vidDiv = document.createElement('div');
    vidDiv.style.margin = '10px'; // Optional styling

    // Create a video element
    const vid = document.createElement('video');
    vid.src = video.src; // Access the 'src' property of the video object
    vid.style.width = '280px';
    vid.style.height = '280px';
    vid.controls = true; // Add video controls

    // Append the video to the div
    vidDiv.appendChild(vid);

    // Append the div to the container
    vidcontainer.appendChild(vidDiv);
  });
};


loadVids()
  //end
 


//loading questions

  //loading qoutes
  
   

// end

});
