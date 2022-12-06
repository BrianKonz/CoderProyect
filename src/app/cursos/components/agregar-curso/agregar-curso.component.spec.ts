import { ComponentFixture, TestBed } from '@angular/core/testing';

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
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// toBeTruthy = El valor tiene que ser no nulo o no indefinido // Null o Undefined = Falsy
// toBeTrue = Espera una variable booleana con valor True
// toequal  = Compara que el valor que sea igual al que le mandemos
// tocontain = Contenga un elemento que le pasemos 
 
