const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navList = document.getElementsByTagName("a");


for (let i = 0; i < navList.length; i++) {
  navList[i].textContent = `${siteContent["nav"]["nav-item-"+(i+1)]}`;
}

let header1 = document.querySelector("h1");
header1.innerHTML = 'DOM <br> Is<br> Awesome';

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

let upperImage = document.getElementById('cta-img');
upperImage.setAttribute('src', siteContent['cta']['img-src']);

let featAbt = document.querySelectorAll('.top-content .text-content');
featAbt[0].children[0].textContent = siteContent['main-content']['features-h4'];
featAbt[0].children[1].textContent = siteContent['main-content']['features-content']
featAbt[1].children[0].textContent = siteContent['main-content']['about-h4'];
featAbt[1].children[1].textContent = siteContent['main-content']['about-content'];

let midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let botSection = document.querySelectorAll('.bottom-content .text-content');

botSection[0].children[0].textContent = siteContent['main-content']['services-h4'];
botSection[0].children[1].textContent = siteContent['main-content']['services-content'];
botSection[1].children[0].textContent = siteContent['main-content']['product-h4'];
botSection[1].children[1].textContent = siteContent['main-content']['product-content'];
botSection[2].children[0].textContent = siteContent['main-content']['vision-h4'];
botSection[2].children[1].textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelectorAll('.contact');
contact[0].children[0].textContent = siteContent['contact']['contact-h4'];
contact[0].children[1].textContent = siteContent['contact']['address'];
contact[0].children[2].textContent = siteContent['contact']['phone'];
contact[0].children[3].textContent = siteContent['contact']['email'];

let footer = document.querySelectorAll('footer');
footer[0].children[0].textContent = siteContent['footer']['copyright'];
