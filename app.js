 
//  Animation
// anim__section-enttry
const tlS1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section-entry__video",
		toggleActions: "restart none none none",
	}
})
	tlS1.from(".anim", {
		x: -700,  
		opacity: 0,
		stagger: 0.5, 
		duration: 0.5 
	})	
	.from(".anim-r",  {
		y:-500,
		rotation:"-720deg",
		opacity: 0, scale: 3, 
		ease:Back.easeOut})
			
// anim__section--benefits
const tlS2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section-benefits__video",
		toggleActions: "restart none none none"
	}
})
	tlS2.from(".section-benefits__video", {
		x: 1000,  
		opacity: 0, 
		duration: 0.5 
	})
	.from(".section-benefits__mini-title", {
		x: 700,  
		opacity: 0, 
		duration: 0.5 
	})	
	.from(".section-benefits__title ", {
		x: 10,
		scale: -2,  
		opacity: 0, 
		duration: 0.5 
	})	
	.from(".section-benefits__description", {
		x: 700,
		opacity: 0, 
		duration: 0.5 
	})	
	.from(".item-product-tab", {
		x: 700,
		stagger: 0.25,
		opacity: 0, 
		duration: 0.5 
	})	
	.from(".section-benefits__tab-content", {
		x: 700,
		stagger: 0.25,
		opacity: 0, 
		duration: 0.5 
	})
// anim__section-modes
const tlS3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section-modes__bord",
		toggleActions: "restart none none none"
	}
})


	tlS3.from(".section-modes__bord", {
		y: 700,
		opacity: 0, 
		duration: 2 
	})
	.from(".section-modes__arrow ", {
		y: 500,
		opacity: 0, 
		duration: 0.6 
	})
	.from(".section-modes__title ", {
		y: 500,
		opacity: 0, 
		duration: 0.6 
	})
	.from(".description--anim", {
		y: 500,
		opacity: 0, 
		duration: 0.6 
	})
	.from(".description-item--anim", {
		y: 500,
		opacity: 0, 
		stagger: 0.25,
		duration: 0.6 
	})
	.from(".number", {
		y: 500,
		opacity: 0, 
		scale: 2,
		rotate: "360deg",
		stagger: 0.25,
		duration: 0.6 
	})
	.from(".section-modes__text", {
		opacity: 0, 
		scale: -2,
		stagger: 0.25,
		duration: 0.6 
	})


// anim__section-for-who
const charsAdd = () => {
	
	return tladd;
}

let btnR = () => {
	const bntRotate = gsap.timeline({defaults :{ duration: 0.1 }, repeat: -1, repeatDelay: 5})
	bntRotate.to(".section-for-whom__button", { rotate: 5})
			 .to(".section-for-whom__button", { rotate: -5})
			 .to(".section-for-whom__button", { rotate: 5})
			 .to(".section-for-whom__button", { rotate: 0});
	return bntRotate;
}


const tlS4 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section-for-whom__img",
		toggleActions: "restart none none none",
	}
})

	tlS4.from(".section-for-whom__img", {
		x: -700,  
		opacity: 0,
		duration: .75 
	})		
		.from(".section-for-whom__title",  { 
			y: 200, 
			opacity: 0,
			duration: 0.5
		})		
		.from(".section-for-whom__text",  {
			y: 200,  
			opacity: 0,
			stagger: 0.5, 
			duration: 0.5
		})
		.from(".section-for-whom__button",  { 
			y: 200, 
			opacity: 0,
			duration: 0.5
		})	
		.add(btnR)
		.add(charsAdd);

//add-task 
const addTask = document.querySelector(".add-task")	
const mySplitText = new SplitText(addTask, {type:"words,chars"}) 

const chars = mySplitText.chars

const fuTask = () => {
	const tladd = gsap.timeline({pause: true})

	tladd.staggerTo(chars, 0.7,  {
		x: "random(-200, 200)",
		y: "random(-200, 200)",
		scale: 2,
		rotation:"720deg",
		opacity:0,
	});
	return tladd;
}

addTask.addEventListener("click", function() {
	fuTask();
})
//Tabs. Change img color.
const tabItems = document.querySelectorAll(".item-product-tab")
const tabItemWrap = document.querySelector(".product-tab")
const tabContent = document.querySelectorAll(".section-benefits__tab-content")


function hide() {
  tabContent.forEach(tab => {
    tab.classList.add("hide")
    tab.classList.remove("show")
  })
  tabItems.forEach(item => item.classList.remove("br-black"))
}
   
function show(i = 0) {
  tabContent[i].classList.add("show")
  tabContent[i].classList.remove("hide")
  tabItems[i].classList.add("br-black");
}

hide()
show()

tabItemWrap.addEventListener("click", function(e){
  let target = e.target;
  console.log(target);

  if (target.classList.contains("item-product-tab")){
      tabItems.forEach((item, i) =>{
          if(item === target) {
             hide();
              show(i)
             
         }
      })
  }

});
// -----------------

