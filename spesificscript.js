const detailPage = document.querySelector(".spesific_post_container");
const imageResize = document.querySelector(".image_container");
const mainUrl = "https://sunnyflowers.site/greekingout/wp-json/wp/v2/posts/";
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


imageResize.addEventListener("click", function(){
    this.classList.toggle("half");
})
