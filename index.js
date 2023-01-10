
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
document.querySelector(".para-about")
.addEventListener("click",function(){
  let y = window.scrollY
    // window.scrollBy(y,600)
    window.scrollTo({
        top: 730,
        
        behavior: 'smooth'
      });
      
      
})

document.querySelector(".para-projects")
.addEventListener("click",function(){
  let y = window.scrollY
    // window.scrollBy(y,600)
    window.scrollTo({
        top: 1800,
        
        behavior: 'smooth'
      });
      
      
})

document.querySelector(".para-contact")
.addEventListener("click",function(){
  let y = window.scrollY
    // window.scrollBy(y,600)
    window.scrollTo({
        top: 2700,
        
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
  // ****************************** form data and contact stuff
  form.addEventListener("submit",function(e){
    e.preventDefault()
    
    const loginFormData = new FormData(form)
    const userName = loginFormData.get("urName")
    console.log(userName);
    spanName.textContent=userName
    form.value =""
   
})
  // **************************** sending email
 function sendEmail(){

   Email.send({
     Host : "smtp.elasticemail.com",
     Username : "duvnjak.ibrahim2004@gmail.com",
     Password : "jsiammji18",
     To : 'duvnjak.ibrahim2004@gmail.com',
     From : document.querySelector("#email").value,
     Subject : "This is the subject",
     Body : "And this is the body"
    }).then(
      message => alert(message)
      );
      
    }