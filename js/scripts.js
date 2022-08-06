
const doc= document.querySelector('body');

const cardTestimonialOne= document.querySelector('.card_testimonialOne');
const cardTestimonialTwo= document.querySelector('.card_testimonialTwo');






doc.addEventListener('click', test);

function test(e){
  console.log(e.target.parentElement);
}

doc.addEventListener('click', switchTestimonial);

function switchTestimonial(e){
  if(e.target.classList.contains('icon_preview')){


    if(e.target.parentElement.parentElement.className === 'main_picture2'){
      cardTestimonialTwo.style.setProperty("--display-card-two", "none");
      cardTestimonialOne.style.setProperty("--display-card-one", "block");
     
    }else if(e.target.parentElement.parentElement.className === 'main_picture1'){
      cardTestimonialTwo.style.setProperty("--display-card-two", "block");
      cardTestimonialOne.style.setProperty("--display-card-one", "none");
    } 

  }else if(e.target.classList.contains('icon_next')){


    if(e.target.parentElement.parentElement.className === 'main_picture1'){
   
      cardTestimonialTwo.style.setProperty("--display-card-two", "block");
      cardTestimonialOne.style.setProperty("--display-card-one", "none");
     
    }else if(e.target.parentElement.parentElement.className === 'main_picture2'){
      cardTestimonialTwo.style.setProperty("--display-card-two", "none");
      cardTestimonialOne.style.setProperty("--display-card-one", "block");
    }

  }
  
}


