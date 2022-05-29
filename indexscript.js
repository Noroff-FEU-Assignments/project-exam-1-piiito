const carousel = document.querySelector(".carousel_posts");
const mainUrl = "https://sunnyflowers.site/greekingout/wp-json/wp/v2/posts/";
const queryString = document.location.search;
let params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


carouselUrl = mainUrl + id;
console.log(carouselUrl);
carousel.innerHTML="Loading..";

async function getProducts(carouselUrl){
        const response = await fetch(carouselUrl);
        const results = await response.json();
        console.log(results);
    
    carousel.innerHTML ="";
    for(let i =0; i <results.length; i++){
        console.log(results[i].title.rendered);
       carousel.innerHTML +=`<div class="slide">
                            <a href="spesificpost.html?id=${results[i].id}"> 
                            <h2 class="title">${results[i].title.rendered}</h2>
                            <img ${results[i].content.rendered}
                            </a>
                            </div>`;
                            
    }
}

getProducts(mainUrl);



const slides = document.querySelectorAll(".carousel_posts");
const forwardButton = document.querySelector(".arrow_button_forward");
const backButton = document.querySelector(".arrow_button_back");

slides.forEach(function(slide, index){
    slide.style.left = `${index*100}%`;
});

let counter = 0;

forwardButton.addEventListener('click', function(){
    counter++;
    carouselFunction();
});

backButton.addEventListener('click', function(){
    counter--;
    carouselFunction();
});

function carouselFunction(){

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*50}%)`;
    });
}

console.log(slides);
