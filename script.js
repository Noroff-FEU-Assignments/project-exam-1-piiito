const detailPage = document.querySelector(".all_posts_container");
const mainUrl = "https://sunnyflowers.site/greekingout/wp-json/wp/v2/posts/";
const queryString = document.location.search;
let params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);


detailPageUrl = mainUrl + id;
console.log(detailPageUrl);
detailPage.innerHTML="Loading..";

async function getProducts(detailPageUrl){
        const response = await fetch(detailPageUrl);
        const results = await response.json();
        console.log(results);
    
    detailPage.innerHTML="";
    results.forEach(function(results){
        detailPage.innerHTML += `<div>
        <a href="spesificpost.html?id=${results.id}"> 
        <h1>${results.title.rendered}</h1>
        ${results.content.rendered}
        </a>
        </div>`;
    })
}

getProducts(mainUrl);


const morePostsButton = document.querySelector(".more_posts_button");

morePostsButton.onclick= function(){

    const newUrl = mainUrl + "?per_page=12";
    detailPage.innerHTML = "";
    getProducts(newUrl);

}