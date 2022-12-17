import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { cursosFeatureKey } from '../../state/cursos.reducer';

import { AgregarCursoComponent } from './agregar-curso.component';

describe('Prueba de Agregar Cursos', () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;
  //Estas dos propiedades sirven para poder obtener la info de la instancia del componente que creamos
  // Una vez que tenemos esa instancia, podemos obtener el valor de las variables a nivle de controlador 
  // y vista para evaluar métodos, comportamiento etc.

  //Este método se va a ejecutar antes de cada prueba unitaria que vamos a realizar en este componente.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursoComponent ]
      //Se evalúa de forma aislada AgregarCursosComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // It sirve para definir cada una de las pruebas unitarias dentro del componente. 
  //Primer parametro es el titulo.
  it('Se crea Correctamente el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido si no agrego algún campo'), () => {
    const formulario = component.formAgregarCurso;
    const comision = formulario.controls ['comision'];
    const nombre = formulario.controls ['nombre'];

    comision.setValue('32350');
    nombre.setValue('ReactJs');
  
    expect(formulario.invalid)
  }

});

// toBeTruthy = El valor tiene que ser no nulo o no indefinido // Null o Undefined = Falsy
// toBeTrue = Espera una variable booleana con valor True
// toequal  = Compara que el valor que sea igual al que le mandemos
// tocontain = Contenga un elemento que le pasemos 
 
