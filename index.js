

// document.addEventListener("scroll",function(){
//     let y = window.scrollY
//     console.log(y);
// })

document.querySelector(".navbar-p")
.addEventListener("click",function(){
    let y = window.scrollY
    // window.scrollBy(y,600)
    window.scrollTo({
        top: 735,
        
        behavior: 'smooth'
      });
      
      
})
