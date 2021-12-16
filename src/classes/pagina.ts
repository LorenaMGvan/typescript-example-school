function animateTitle() {
  
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {    
    descriptor.value = function ( animado: string) {
      const titlePage = <HTMLInputElement>document.querySelector('.page-title');        
      const titleDefault = titlePage.innerHTML;

      if( animado == 'transicion') {                
        titlePage.innerHTML = `<span class="title-line"> ${ titleDefault }</span>`;
      }
      
    }
    return descriptor;
  }

}


export class Pagina {

  constructor(
    public title: string,    
    public titleColor: string,
  ){} 


  //@animateTitle()
  showTitlePage(animado: string) {		
    const titlePage = <HTMLInputElement>document.querySelector('.page-title');
    titlePage.style.color = this.titleColor;         
    console.log('color del titulo');
	}  


}