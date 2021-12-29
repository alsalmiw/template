const apiKey='OlZJxDDidmK6mzSUkbZnT7EJaJzwWr-JkT4dFRuV6DM'
const count=10;
//const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const imagesContainer = document.getElementById('image-container'),
loader=document.getElementById('loader');

let photoArray=[];

// Helper function to set attributes
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links and photos and add it to the DOM
function displayPhotos(){
    photoArray.forEach((photo) => {
        // creat anchor element to link
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        // create image for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title:photo.alt_description,
        });
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        // put <img> inside the <a>, then put both inside imageContainer element
        item.appendChild(img);
        imagesContainer.appendChild(item);
    });
}

// Get Photo from API
// function getPhotos(){
//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(data=> {
//        photoArray=data;
//         console.log(photoArray);
//         displayPhotos();
//     })
// }

async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhotos();
        
    } catch (error) {
        // catch error here
    }
}

// check to see if scrolling near the bottom of the page, load more photos
window.addEventListener('scroll', ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-1000){
        getPhotos();
        console.log('load more');
    }
    
});
getPhotos();


