const detailPage = document.querySelector(".spesific_post_container");
const imageResize = document.querySelector(".image_container");
const cors = "https://noroffcors.herokuapp.com/";
const mainUrl = cors + "https://sunnyflowers.site/greekingout/wp-json/wp/v2/posts/";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

detailPageUrl = mainUrl + id;
console.log(detailPageUrl);
detailPage.innerHTML= "";

async function productDetails(){
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
   detailPage.innerHTML += `<h1>${details.title.rendered}</h1>
                            ${details.content.rendered}
                           `
    imageResize.innerHTML += `${details.content.rendered}`
    document.title +=   ` ${details.title.rendered}`;
   
}



/*document.getElementsByClassName("img").style.transform = "scale(1,5)";*/
/*addEventListener(click, ) 

const image = document.querySelector(".images");
console.log(image);*/


/*

const image = document.querySelector(".image_container");
const mediaUrl = "http://localhost/flower-power/wp-json/wp/v2/media/";
const imageQueryString = document.location.search;
const imageParams = new URLSearchParams(imageQueryString);
const imageId = params.get("id");
console.log(imageId);

imageUrl = mediaUrl + imageId;
console.log(imageUrl);


async function pictures(){
   try{
       const fetchPictures = await fetch(imageUrl);
       const images = await fetchPictures.json();
       console.log(images);
       image.innerHTML= "";
       getImages(images);
   }
   catch(error){
       console.log(error);
   }
   
}

pictures();

function getImages(images){
   image.innerHTML += `<img src="${images.media_details.file}">
                           `;
   
}
*/

/*
const image = document.querySelector(".image_container");
/*const mainUrl = "http://localhost/flower-power/wp-json/wp/v2/posts/";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

detailPageUrl = mainUrl + id;
console.log(detailPageUrl);
image.innerHTML= "";

async function images(){
   try{
       const fetchImages = await fetch(detailPageUrl);
       const blogImages = await fetchImages.json();
       console.log(blogImages);

       createHtml(blogImages);
   }
   catch(error){
       console.log(error);
   }
   
   
}

images();

function createHtml(blogImages){
   image.innerHTML += ` <div class=".image" ${blogImages.content.rendered}<div>
                           `;
   
}*/

/*

console.log(imageResize);
imageResize.onclick = function (event){
    imageResize.style.width = `100%`;
    imageResize.style.height = `auto`;
    imageResize.style.transition = `width 05.s ease`;
} 

document.onclick= function(){
    imageResize.style.width = `80%`;
    imageResize.style.height = `auto`;
    imageResize.style.transition = `width 05.s ease`;

}*/


imageResize.addEventListener("click", function(){
    this.classList.toggle("half");
})

/*document.body.onclick*/