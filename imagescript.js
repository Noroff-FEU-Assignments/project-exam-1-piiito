
const image = document.querySelector(".image_container");
/*const mainUrl = "http://localhost/flower-power/wp-json/wp/v2/posts/";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

detailPageUrl = mainUrl + id;
console.log(detailPageUrl);*/
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
   
}


const imageResize = document.querySelector(".image_container");
console.log(imageResize);
imageResize.onclick = function (){
    imageResize.style.transform = `scale(1,5)`;
} */