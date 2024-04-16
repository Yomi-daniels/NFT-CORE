

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

// SEARCH OPEN AND CLOSES

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

// CONNECT WALLET 
const save_btn = document.querySelector('.save-btn');

save_btn.onclick = function(){
    this.innerHTML = `<div class="loader"></div>`;
    setTimeout(() => {
        this.innerHTML = `<div class="connected">Connected <img src="images/done.png" alt="" width="20px"></div> `
    }, 2000);
    this.style = "background-color: #fff;"

};

// CONNECT Wallet 2

save_btn.addEventListener('click', function(){
  setTimeout(() => {
    document.getElementById('connect-btn').innerHTML =  `<div class="connected">Connected <img src="images/icons8-done-60.png" alt="" width="20px"></div> `
  }, 2000);
    
});


save_btn.addEventListener('click', function(){
    setTimeout(() => {
      document.getElementById('connect-btn2').innerHTML =  `<div class="connected">Connected <img src="images/icons8-done-60.png" alt="" width="20px"></div> `
    }, 2000);
      
  });

// SHARE BUTTON
const shareButton = document.getElementById("share-button");
const shareContent = document.getElementById("share-content");
const shareContainer = document.getElementById("share-container-link");
const title = window.document.title;
const url = window.document.location.href;


shareButton.addEventListener('click', function(){
    if(navigator.share){
        navigator.share({
            title: `${title}` ,
            url: `${url} `
        }).then(function(){
            console.log("Thanks for sharing");
        })    
        .catch(console.error)
    }else{
        shareContainer.classList.add('show-share');
        shareContent.classList.add('show-share');
    }
})

shareContainer.addEventListener('click', function(){
    shareContainer.classList.remove('show-share');
    shareContent.classList.remove('show-share');
})

// PLACE BID PLACED 

let buttons = document.querySelectorAll('#bid-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
  if(button.innerHTML === 'bid placed'){
    button.innerHTML = 'place bid';
    button.style.backgroundColor = '#15BFFD'
  }else{
    button.innerHTML = 'bid placed'
    
    button.style.backgroundColor = 'transparent'
  }

  })
});

//FOLLOW BTN
let followBtn = document.querySelectorAll('#followBtn');
followBtn.forEach(followBtn =>{
    followBtn.addEventListener('click', ()=>{
        if(followBtn.innerHTML === "Following"){
            followBtn.innerHTML = 'Follow'
            followBtn.style.color = "#15BFFD"
        }else{
            followBtn.innerHTML = 'Following'
            followBtn.style.color = "#fff"
        }
    })
})

// STARS

// function stars(){
//     let e = document.createElement('div');
//     e.setAttribute('class', 'star');
//     document.body.appendChild(e);
//     e.style.left = Math.random() *
//     + innerWidth + 'px';

//     setTimeout(function(){
//         document.body.removeChild(e);
//     }, 30000);
// }

// setInterval( function(){
//     stars()
// }, 100);

// OPEN NAV LINK CONTAINER

let menuBar = document.getElementById('MenuBar');
let hamburgerLinkContainer = document.getElementById('Hamburger-link-container');
let cancelBtn = document.getElementById('cancelBtn');

menuBar.addEventListener('click', ()=>{
        hamburgerLinkContainer.style.display = "block"
        hamburgerLinkContainer.style.transition = '0.3s ease'
        cancelBtn.style.display = 'block'
})

cancelBtn.addEventListener('click', ()=>{
    hamburgerLinkContainer.style.display = 'none'

});


// Get all the links within the hamburger links container
const links = document.querySelectorAll('.hamburger-links .link');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Close the parent container
        hamburgerLinkContainer.style.display = 'none';
    });
});



// CONNECT WALLER SMALL SCREEN



// CONNECT WALLET 
const save_btn_small = document.querySelector('.save-btn-small');

save_btn_small.onclick = function(){
    this.innerHTML = `<div class="loader" style="width:200px; height:36px;"></div>`;
    setTimeout(() => {
        this.innerHTML = `<div class="connected" >Connected<img src="images/done.png" alt="" width="30px"></div> `
    }, 2000);
    this.style = "background-color: #fff;"


};

// CONNECT Wallet 2

save_btn_small.addEventListener('click', function(){
  setTimeout(() => {
    document.getElementById('connect-btn').innerHTML = `<div class="connected">Connected<img src="images/icons8-done-60.png" alt="" width="20px"></div> `
  }, 2000);
    
});


save_btn_small.addEventListener('click', function(){
    setTimeout(() => {
      document.getElementById('connect-btn2').innerHTML = `<div class="connected-2">Connected`
    }, 2000);
      
  });


//   const shareButtonSmall = document.getElementById("share-button-small");
//   const shareContentSmall = document.getElementById("share-content-small");
//   const shareContainerSmall = document.getElementById("share-container-link-small");
//   const titles = window.document.title;
//   const urls = window.document.location.href;
  
  
//   shareButtonSmall.addEventListener('click', function(){
//       if(navigator.share){
//           navigator.share({
//               titles: `${title}`,
//               urls: `${url} `
//           }).then(function(){
//               console.log("Thanks for sharing");
//           })    
//           .catch(console.error)
//       }else{
//           shareContainerSmall.classList.add('show-share');
//           shareContentSmall.classList.add('show-share');
//       }
//   })
  
//   shareContainerSmall.addEventListener('click', function(){
//       shareContainerSmall.classList.remove('show-share');
//       shareContentSmall.classList.remove('show-share');
//   })
const shareSmall = document.getElementById('share-button-small');
shareSmall.addEventListener('click',()=>{
    if(navigator.share){
        navigator.share({
            text: 'check this cool website!',
            url: 'http://127.0.0.1:5501/index.html',
            title: 'NFT CORE'
        })
    }else{
        navigator.clipboard.writeText('Hello world')
    }
});



  