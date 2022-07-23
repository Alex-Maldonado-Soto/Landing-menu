///////codigo del navbar para mobile

function navbar() {
  gsap.to(".navbar", {
    duration: 0.5,
    right: -237,
  });

  document.querySelector("#div").style.backgroundColor = "transparent";
}

function navbarReverse() {
  gsap.to(".navbar", {
    duration: 0.5,
    right: 0,
  });

  document.querySelector("#div").style.backgroundColor = "rgb(32 32 32 / 67%)";
}

let nameDesplegable;
let company = "company";
let feactures = "feactures";
let buttonIcon = 1;


function menuDesplegable(nameDesplegable) {
  const menudesplegable = document.querySelector(`.list__show-${nameDesplegable}`);
  menudesplegable.classList.toggle("list__show--click");



  if (buttonIcon == 1) {
    gsap.to(`.list__arrow_${nameDesplegable}`, {
      rotateZ: 180,
    });
  buttonIcon = 2;
  } else if (buttonIcon == 2) {
    gsap.to(`.list__arrow_${nameDesplegable}`, {
      rotateZ: 0,
    });
  buttonIcon = 1;
  }
}

//////Codigo original del toggle

// function menuDesplegableFeactures() {
//   const menudesplegable= document.querySelector('.list__show-feactures');
//   menudesplegable.classList.toggle('list__show--click');

//   if (buttonIcon == 1) {
//     gsap.to(".list__arrow_feactures", {
//       rotateZ: 180
//     });

//     buttonIcon = 2;

//   } else if (buttonIcon == 2) {
//     gsap.to(".list__arrow_feactures", {
//       rotateZ: 360
//     });

// buttonIcon = 1;

//   }

// }
