const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");
let dots = document.querySelectorAll(".dot");
const dotsContainer = document.querySelector(".dots");

function dots1 () {
    for (let i = 0; i< slides.length; i++) {
	    const dot = document.createElement("div");
	    dot.classList.add("dot");
	    dotsContainer.appendChild(dot);
	    const dots = document.querySelectorAll(".dot");
	    dots[0].classList.add("dot_selected");	
   }
}
dots1();

let i = 0;
arrowright.addEventListener("click", function () {
	const dots = document.querySelectorAll(".dot");
	dots[i].classList.remove("dot_selected");
	i++;
	if (i === slides.length) {
		i = 0
	}
	dots[i].classList.add("dot_selected");

	img.src = "./assets/images/slideshow/" + slides[i].image;
	txt.innerHTML = slides[i].tagLine;
  });

arrowleft.addEventListener("click", function () {
	const dots = document.querySelectorAll(".dot");
	dots[i].classList.remove("dot_selected");
	i--;
	if (i < 0) {
	  i = slides.length -1
	}
	dots[i].classList.add("dot_selected");

	img.src = "./assets/images/slideshow/" + slides[i].image;
	txt.innerHTML = slides[i].tagLine;
  });
