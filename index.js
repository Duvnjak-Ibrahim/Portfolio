
// ************* this is for that litle house,
// pixel from up counter
document.addEventListener("scroll",function(){
  let y = Math.trunc(window.scrollY)
    

    if(y >= 400){
      document.querySelector(".scroll-up")
      .classList.remove("hidden")
    }else if(y < 200){
      document.querySelector(".scroll-up")
      .classList.add("hidden")
    }
    
})
// ***************** when about is clicked
document.querySelector(".navbar-p")
.addEventListener("click",function(){
  let y = window.scrollY
    // window.scrollBy(y,600)
    window.scrollTo({
        top: 715,
        
        behavior: 'smooth'
      });
      
      
})
// ***************** when house is clicked
  document.querySelector(".scroll-up")
  .addEventListener("click",function(){
    let y = window.scrollY
    
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })