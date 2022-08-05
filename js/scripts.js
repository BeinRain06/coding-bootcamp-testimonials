
const doc= document.querySelector('body');
const iconNext= document.querySelector('.icon_next');
const iconPreview= document.querySelector('.icon_preview');

const cardTestimonialOne= document.querySelector('.card_testimonialOne');
const cardTestimonialTwo= document.querySelector('.card_testimonialTwo');

let finalCard = {
    cardOne : true,
    cardTwo : true
};


doc.addEventListener('click', test);

function test(e){
  console.log(e.target.parentElement);
}

doc.addEventListener('click', switchTestimonial);

function switchTestimonial(e){
  if(e.target.classList.contains('icon_preview')){

    if(e.target.parentElement.parentElement.className === 'main_picture2'){
      cardTestimonialTwo.style.animation ='slide-to-the-Right 800ms ease-in-out forwards';
      cardTestimonialTwo.style.setProperty("--display-card-two", "none");
      finalCard.cardTwo= false;
    }else if(e.target.parentElement.parentElement.className === 'main_picture1'){
      e.preventDefault();
      console.log(e.target);
    } 

  }else if(e.target.classList.contains('icon_next')){
    if(e.target.parentElement.parentElement.className === 'main_picture1'){
      cardTestimonialOne.style.animation ='slide-to-the-Left 800ms ease-in-out forwards';
      cardTestimonialTwo.style.setProperty("--display-card-two", "block");
      cardTestimonialtwo.style.transform = "translateX(-900px)";
      // cardTestimonialtwo.style.animation ='slide-to-the-Left 800ms ease-in-out forwards';
      // cardTestimonialTwo.style.animation ='slide-to-the-Right 800ms ease-in-out forwards';
      finalCard.cardOne= false;
    }else if(e.target.parentElement.parentElement.className === 'main_picture2'){
      e.preventDefault();
      console.log(e.target);
    }
  }
  
}

// doc.addEventListener('webkitAnimationEnd', displayProperTestimonialsCard);

// function displayProperTestimonialsCard(e){
//   if(e.target.parentElement.parentElement.className === 'main_picture1' && finalCard.cardOne === false){
//     cardTestimonialTwo.style.setProperty(' --display-card-two', 'block');
//   }else if(e.target.parentElement.parentElement.className === 'main_picture2' && finalCard.cardTwo === false){
//     cardTestimonialTwo.style.setProperty(' --display-card-one', 'block');
//   }
// }