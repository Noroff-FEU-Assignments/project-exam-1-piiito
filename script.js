const detailPage = document.querySelector(".all_posts_container");
const mainUrl = "https://sunnyflowers.site/flower-power/wp-json/wp/v2/posts/";

/* const detailPage = document.querySelector(".bodøraincoat");*/
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
    
    /*detailPage.innerHTML ="";
    for(let i =0; i <results.length; i++){
        console.log(results[i].title.rendered);
        detailPage.innerHTML +=`<div>
                                <a href="spesificpost.html?id=${results[i].id}"> 
                                <h1>${results[i].title.rendered}</h1>
                                <p>${results[i].content.rendered}</p> 
                                </a>
                                </div>`;
    }*/
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


const morePostsButton = document.querySelector(".more_posts_button");

morePostsButton.onclick= function(){

    const newUrl = mainUrl + "?per_page=12";
    detailPage.innerHTML = "";
    getProducts(newUrl);

}