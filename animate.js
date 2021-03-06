
//oggetti che azionano l'effetto ad un elemento se con lo scroll diventa visibile
function AnimateClass(array_el){
		this.arrayel = arrayel;
		this.animate=function(){
			var i;
			if(isMobileF()){
				for(i=0; i<arrayel.length;i++){
					let el=$(arrayel[i].name_el).children().first();
					if (isScrolledIntoView(el) === true) {
						$(arrayel[i].name_el).addClass(arrayel[i].name_effect);
					}
				}
			}
			else
			{
				for(i=0; i<arrayel.length;i++)
					$(arrayel[i].name_el).each(function() {
					if (isScrolledIntoView(this) === true) {
						$(this).addClass(arrayel[i].name_effect);
					}
				});
			}
		}
}

//oggetti che associano un elemento ad un effetto
function AnimateElement(name_el, name_effect){
		this.name_el=name_el;
		this.name_effect=name_effect;
}		
    


//funzione che determina se un elemento è visibile
function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isMobileF() {      
   return isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
}