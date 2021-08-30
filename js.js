const addTask = document.querySelector(".add-task")	

const taskR = () => {
	const stepTl = gsap.timeline({defaults :{ duration: 0.1 }})
		stepTl.to(".left", 4,   {x:-500, rotation:"-720deg", opacity: 0, scale: 5, ease:Back.easeOut} , 0.2)
		.to(".left-d",  4,   {y:-500, x: 500, rotation:"720deg", opacity: 0, scale: 2.5, ease:Back.easeOut}, 0.2)
		.to(".left-u",  4,   {y:-500,x:500, rotation:"-720deg", opacity: 0, scale: 3, ease:Back.easeOut}, 0.2)
		.to(".right",  4,   {x:500, rotation:"720deg", opacity: 0, scale: 5, ease:Back.easeOut}, 0.2)
		.to(".right-d", 4,   {y:500, x: 500, rotation:"-360deg", opacity: 0, scale: 4, ease:Back.easeOut}, 0.2)
		.to(".right-u", 4,   {y:-500,  x: 500, rotation:"720deg", opacity: 0, scale: 3, ease:Back.easeOut}, 0.2)
	return stepTl;
}

addTask.addEventListener("click", ()=> {
	taskR.play();
})