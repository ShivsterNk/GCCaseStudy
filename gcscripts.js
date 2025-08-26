/* GRAND CENTRAL ABOUT PAGE, UNION SQUARE ACCORDION SECTIONS */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style. maxHeight = null;
    } else {
      panel.style. maxHeight = panel.scrollHeight + "px";
    }
  });
}


/* SLIDESHOWS */
let slideIndex = 1;
showSlides(slideIndex);

/* Next/previous controls */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Thumbnail image controls */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides[slideIndex - 1]){
        slides[slideIndex-1].style.display = "block";
    }
}

/* BUTTON TO SEE OPTIONS "Rename to toggleVisibility"*/	 	
function myFunction(divId) {
    var x = document.getElementById(divId);
    if (x.style.display === "none") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
}

/* BACK TO TOP BUTTON */
let topbutton = document.getElementById("backTop");

if(topbutton) {
    window.onscroll = function() {
        scrollFunction();
        toggleMenuButtonVisibility(); 
    };
    
    function scrollFunction() {
        if(window.scrollY > 40) {
            topbutton.style.display = "block";
        }
        else {
            topbutton.style.display = "none";
        }
    }
    
    topbutton.onclick = function() {
        topFunction();  
    };
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* PLACES SELECTION */
if (document.getElementById("places")) {
    document.getElementById("places").addEventListener("change", function() {
        const selectedValue = this.value;

        if (selectedValue) {
            const confirmed = confirm("Are you sure you want to go here?");
            if (confirmed) {
                // Redirect the user to the selected page
                window.location.href = selectedValue;
            }
        }
    });
}

/* HAMBURGER MENU */
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")){
                document.getElementById("menuButton").classList.add("hidden");
            }
            else {
                document.getElementById("menuButton").classList.remove("hidden");
            }
        });
    }
});		

/* SIDE NAVIGATION */
window.onload = function() {
	const sidenav = document.getElementById("mySidenav")
	if (sidenav) {
	    sidenav.style.width = "0";
	}
};
				
function toggleMenuButtonVisibility() {
  	var menuButton = document.getElementById("menuButton");

  	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    	menuButton.classList.add("hidden");  
  	} 
  	else {
   		menuButton.classList.remove("hidden");  
  	}
}

// SIDE NAVIGATION		
function openNav() {
  	document.getElementById("mySidenav").style.width = "250px";
  	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  	document.getElementById("menuButton").classList.add("hidden");
}

function closeNav() {
  	document.getElementById("mySidenav").style.width = "0";
  	document.body.style.backgroundColor = "white";
  	document.getElementById("menuButton").classList.remove("hidden");
}	

/* FULLSCREEN IMAGERY */
const images = document.querySelectorAll('.about-pic');
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImage = document.getElementById('fullscreen-image');
const exitButton = document.getElementById('exit-button');
		
// image in fullscreen when clicked
images.forEach(image => {
	image.addEventListener('click', function () {
        fullscreenImage.src = image.src; // Set the fullscreen image source to the clicked image's source
       	fullscreenContainer.style.display = 'flex'; // Show the fullscreen container
   	});		
});
		
// Exit fullscreen when the X button is clicked
document.addEventListener('DOMContentLoaded', function () {
    const exitButton = document.getElementById('exit-button');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    
    if (exitButton && fullscreenContainer) {
        exitButton.addEventListener('click', function () {
            fullscreenContainer.style.display = 'none'; // Hide the fullscreen container
        });
    } else {
        console.log('Error: Elements not found!');
    }
});    	
// Allow user to exit fullscreen by pressing the 'Esc' key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        fullscreenContainer.style.display = 'none'; // Hide the fullscreen container
    }
});
