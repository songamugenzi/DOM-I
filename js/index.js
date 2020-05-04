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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Nav

const keys = Object.keys(siteContent.nav);
let nav = document.querySelectorAll('nav a');
navArray = Array.from(nav);
const navTexts = Object.values(siteContent.nav);
navTexts.pop();

document.querySelectorAll('nav a').forEach((nav, idx) => {
  nav.textContent = siteContent.nav[keys[idx]];

  // task 3
  nav.style.color = 'green';
});

var newNav = document.querySelector('nav');


const newLinkProps = {
  href: '0',
  textContent: 'append',
}
const appendLink = document.createElement('a');
appendLink.href = newLinkProps.href
appendLink.textContent = newLinkProps.textContent
newNav.appendChild(appendLink);


const newLinkProps2 = {
  href: '0',
  textContent: 'prepend',
}
const prependLink = document.createElement('a');
prependLink.href = newLinkProps2.href
prependLink.textContent = newLinkProps2.textContent
newNav.prepend(prependLink);

// CTA

// h1
var h1 = document.querySelector('h1')
h1.textContent = siteContent.cta['h1']

// button
var button = document.querySelector('button')
button.textContent = siteContent.cta['button']

// main image
var mainImage = document.getElementById('cta-img')
mainImage.setAttribute('src', siteContent['cta']['img-src'])


var textCon = document.querySelectorAll('.text-content')

textCon[0].firstElementChild.textContent = siteContent['main-content']['features-h4']
textCon[0].firstElementChild.nextSibling.textContent = siteContent['main-content']['features-content']

textCon[1].firstElementChild.textContent = siteContent['main-content']['about-h4']
textCon[1].firstElementChild.nextSibling.textContent = siteContent['main-content']['about-content']

textCon[2].firstElementChild.textContent = siteContent['main-content']['services-h4']
textCon[2].firstElementChild.nextSibling.textContent = siteContent['main-content']['services-content']

textCon[3].firstElementChild.textContent = siteContent['main-content']['product-h4']
textCon[3].firstElementChild.nextSibling.textContent = siteContent['main-content']['product-content']

textCon[4].firstElementChild.textContent = siteContent['main-content']['vision-h4']
textCon[4].firstElementChild.nextSibling.textContent = siteContent['main-content']['vision-content']

var midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const newKeys = Object.keys(siteContent);

var conCon = document.querySelector('.contact').children

const newArr = Array.from(conCon)

newArr.forEach((contact, idx) => {
  contact.textContent = siteContent.contact[newKeys[idx]]
})

document.querySelector('footer').firstElementChild.textContent = siteContent['footer']['copyright']