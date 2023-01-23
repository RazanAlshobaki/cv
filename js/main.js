let sections= document.querySelectorAll('section');
let links= document.querySelectorAll('nav .container ul li a');
let spans=document.querySelectorAll('.setting span');
let btn=document.querySelector('.setting button');
let div=document.querySelector('.setting');
let root=document.querySelector(':root');
let Endbtn=document.querySelector('.End-setting button');


btn.onclick= function(){
    div.classList.toggle('show');
spans.forEach(span =>{
    span.onclick= function(){
        root.style.setProperty('--main-color' , span.dataset.color);
    }
})
}

onscroll=function(){
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop -300){
            links.forEach(link =>{
                if(link.getAttribute('href')== '#'+section.getAttribute('id')){
                    link.style.color='#333';
                }else {
                    link.style.color=null; 
                }
            });
        }
        
    });
    Endbtn.onclick= function(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }
        }
