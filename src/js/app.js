document.addEventListener("DOMContentLoaded", function() {
	addGaleria();
	navFija();
	resaltarEnlace();
	navEnlaces();
});
const cantidadImagenes=16;

function addGaleria() {
	for(let i=1; i<=cantidadImagenes; i++) {
		
		const galeria=document.createElement("IMG");
		galeria.classList.add(`imagen${i}`);
		galeria.src=`src/img/gallery/full/${i}.jpg`;
		galeria.alt="Imagen de Galeria";
		
		const divGaleria=document.querySelector(".galeria-img");
		divGaleria.appendChild(galeria);
		
		const imagen=document.querySelector(`.imagen${i}`);
		imagen.addEventListener("click", modal);
		const imagenModal=document.createElement("IMG");


		function modal() {
			const modal=document.createElement("DIV");
			modal.classList.add("modal");
			const body=document.querySelector("body");
			body.appendChild(modal);
			body.classList.add("overflow-hidden");
			modal.addEventListener("click", cerrarModal);
			
			imagenModal.src=`src/img/gallery/full/${i}.jpg`;
			imagenModal.alt="Imagen";
			imagenModal.classList.add("imagenModal");
			modal.appendChild(imagenModal);
			
			function cerrarModal() {
				modal.classList.add("cerrarModal");
				body.classList.remove("overflow-hidden");
			
			setTimeout(() => {modal.remove()}, 100);
			}
		}
		
	};
}

function navFija() {
	const header=document.querySelector("header");
	const sobreFestival=document.querySelector(".sobreFestival");
	
	const scroll=document.addEventListener("scroll", function() {
		if(sobreFestival.getBoundingClientRect().bottom < 1) {
			header.classList.add("fixed");
		}
		else {
			header.classList.remove("fixed");
		}
	});
}

function resaltarEnlace() {
	document.addEventListener("scroll", function() {
		const enlaces=document.querySelectorAll(".navegacion-principal a");
		const sections=document.querySelectorAll("section");
		
		let actual="";
		sections.forEach(section => {
			const sectionTop=section.offsetTop;
			const sectionHeight=section.clientHeight;
			
			if(window.scrollY >= (sectionTop-sectionHeight / 3)) {
				actual=section.id;
			}
		});
		
		enlaces.forEach(enlace => {
				enlace.classList.remove("active");
			if(enlace.getAttribute("href") === "#" + actual) {
				enlace.classList.add("active");
			}
		});
	});
}

function navEnlaces() {
	const enlaces=document.querySelectorAll(".navegacion-principal a");
	
	enlaces.forEach(enlace => {
		enlace.addEventListener("click", e => {
			e.preventDefault();
			const sectionScroll=e.target.getAttribute("href");
			const section=document.querySelector(sectionScroll);
			
			section.scrollIntoView({behavior: "smooth"});
		});
	});
}





