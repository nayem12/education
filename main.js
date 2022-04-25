window.addEventListener('scroll',()=>{
     document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

//show hide faq

const faqs = document.querySelectorAll('.faq');
faqs.forEach( faq => {
     faq.addEventListener('click',()=>{
          faq.classList.toggle('open');
          
          const icon = faq.querySelector('.faq-icon i');
          if(icon.className=='uil uil-plus'){
               icon.className='uil uil-minus'
          }else{
               icon.className='uil uil-plus';
          }
     })
})



//show nav menu

const menu = document.querySelector('.nav_menu');
const opnbtn = document.querySelector('#open_menu_btn');
const clsbtn = document.querySelector('#close_menu_btn');
 opnbtn.addEventListener('click',()=>{
     menu.style.display="block"; 
     clsbtn.style.display='inline-block';
     opnbtn.style.display="none";
 })

 //hide nav btn

 const closenav=()=>{
    menu.style.display="none"; 
    
    clsbtn.style.display='none';
    opnbtn.style.display="inline-block";
 }
clsbtn.addEventListener('click',closenav)