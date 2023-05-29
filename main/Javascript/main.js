// Animation to show items relative to the position of the webpage
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const video1 = document.getElementById('#my_video');
// video1 = observer.observe(video1);

// adjust the size of each section for ease of scrolling an animations
var elements = document.getElementsByTagName('section');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elementHeight = element.offsetHeight;
    var marginValue = 950 - elementHeight;
  
    element.style.marginBottom = marginValue + 'px';
}

// function to autoplay the videos
// var bg_video = document.getElementById('main_video');
// bg_video.play();


function checkOpacityAndPlay() {
    var video1 = document.getElementById('my_video1');
    
    if (video1) {
      var opacity = parseFloat(getComputedStyle(video1).getPropertyValue('opacity'));
      
      if (opacity >= 0.9) {
        video1.play();
      } else {
        video1.pause();
        video1.currentTime = 0;
      }
    }

    var video2 = document.getElementById('my_video2');
    
    if (video2) {
      var opacity = parseFloat(getComputedStyle(video2).getPropertyValue('opacity'));
      
      if (opacity >= 0.9) {
        video2.play();
      } else {
        video2.pause();
        video2.currentTime = 0;
      }
    }
  }
  
  var checkOpacityInterval = setInterval(checkOpacityAndPlay, 500);

  // Function to create new tab and go to URL
  function openNewTab(url) {
    window.open(url, '_blank');
  }