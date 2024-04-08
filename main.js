

// HEADER CHANGE BACKGROUND FROM SECTION TO SECTION
window.addEventListener("scroll", function(){
    var header = document.getElementById("navbar");
    var Section2 = document.getElementById("section-2");
    if(Section2.getBoundingClientRect().top <= 0){
        header.style.backgroundColor = "#000000d8"
        
    }
    else{
        header.style.backgroundColor = "transparent"

    };
    
});


// SCROLL PADDING TOP

const navigationHeight = document.getElementById("navbar").offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");



// NAVLINK SCROLL TO SECTION (ONSCROLL & ONCLICK)
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('ul li a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
              links.classList.remove('active')
              document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
}

// document.addEventListener("DOMContentLoaded", function() {
//     const searchImg = document.querySelector('.search-img');
//     const cancelIcon = document.querySelector('.cancel-icon');
//     const inputContainer = document.querySelector('.input-container');

//     searchImg.addEventListener('click', function() {
//         this.style.display = 'none'; // Hide the search image
//         inputContainer.style.display = 'flex'; // Show the input container
//         inputContainer.style.transformOrigin = 'left'; // Set transform origin to right
        
//         cancelIcon.style.display = 'block'
//     });

//     cancelIcon.addEventListener('click', function() {
//         inputContainer.style.display = 'none'; // Hide the input container
//         searchImg.style.display = 'block'; // Show the search image
//         cancelIcon.style.display = 'none'
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const searchImg = document.querySelector('.search-img');
    const cancelIcon = document.querySelector('.cancel-icon');
    const inputContainer = document.querySelector('.input-container');

    searchImg.addEventListener('click', function() {
        this.style.display = 'none'; // Hide the search image
        inputContainer.classList.add('show'); // Show the input container with transition
        
        cancelIcon.style.display = 'block'
    });

    cancelIcon.addEventListener('click', function() {
        inputContainer.classList.remove('show'); // Hide the input container with transition
        searchImg.style.display = 'block'; // Show the search image
        cancelIcon.style.display = 'none'
    });
});


const save_btn = document.querySelector('.save-btn');

save_btn.onclick = function(){
    this.innerHTML = `<div class="loader"></div>`;
    setTimeout(() => {
        this.innerHTML = `<div class="connected">Connected <img src="images/done.png" alt="" width="20px"></div> `
    }, 2000);
    this.style = "background-color: #fff;"
}