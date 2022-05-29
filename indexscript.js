const carousel = document.querySelector(".carousel_posts");
const mainUrl = "https://sunnyflowers.site/flower-power/wp-json/wp/v2/posts/";
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

   /* carousel.innerHTML="";
    results.forEach(function(results){
        carousel.innerHTML += `<div>
        <a href="spesificpost.html?id=${results.id}"> 
        <h1>${results.title.rendered}</h1>
        ${results.content.rendered}
        </a>
        </div>`;
    })*/
}

getProducts(mainUrl);

/*async function productDetails(){
    try{
        const fetchDetails = await fetch(detailPageUrl);
        const details = await fetchDetails.json();
        console.log(details);

        createHtml(details);
    }
    catch(error){
        console.log(error);
    }
}

productDetails();

function createHtml(details){
    detailPage.innerHTML += `<h1>${details.name}</h1>`;
}*/


/*const carouselForward = document.querySelector(".arrow_button_forward");

carouselForward.onclick= function(){

    const carouselUrl = mainUrl + "?per_page=12";
    carousel.innerHTML = "";
    getProducts(carouselUrl);
 
}*/ 
/*
document.addEventListener("click", e=> {
let arrow
if(e.target.matches(".arrow")){
    arrow = e.target
} else{
arrow = e.target.closest(".arrow")
}
if (arrow != null) onArrowClick(arrow)
})

function onArrowClick(arrow){
    const carouselContainer = arrow.closest(".home_container").querySelector(".carousel_posts")
    const sliderIndex = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--slider-index"))
    const itemsPerScreen = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--items-per-screen"))
    if(arrow.classList.contains("arrow_button_back")){
        carouselContainer.style.setProperty("--slider-index", sliderIndex - 1)
    }
    if (arrow.classList.contains("arrow_button_forward")){
        carouselContainer.style.setProperty("--slider-index", sliderIndex + 1)
    }
    
carousel
}*/

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
