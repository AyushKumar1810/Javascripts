// const allImages = document.getElementsByTagName('img');
// for (let img of allImages){
//     img.src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const squareImages=document.getElementsByClassName('square')
// for (let img of squareImages){
//     img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

//////query SELECTOR : A newer all in one method to select single element 

// document.querySelector('h1')
// const h1=document.querySelector('h1')
// console.dir(h1)
const allLink=document.querySelectorAll('a')
// for (let link of allLink){
//     link.innerText='I am New Here '
// }

///Styling using Javascripts
for (let link of  allLink){
    link.style.color='rgb(0,180,134)';
    link.style.textDecorationColor = 'magenta'
    link.style.textDecorationStyle = 'wavy'
}
////for getting all the styles applied to particular element we can use :
///window.getComputedStyle(h1)
// const h1 = document.querySelector('h1')
// h1.style.fontSize
// window.getComputedStyle(h1)
//// for accesing what element uses which type of styles we use
///window.getComputedStyle(h1).fontcolor. , window.getComputedStyle(h1).color etc