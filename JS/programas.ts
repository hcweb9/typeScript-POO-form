//Decorador Se crea una función para luego poder pegar su método (lanzamiento) en la nueva clase en este caso en new Programa.
function arranque(lanzar: string) {
  return function (target: Function) {
    target.prototype.lanzamiento = function (): void {
      alert(lanzar);
    };
  };
}

@arranque("Esto es un decorator de typeScript!!!:)")
class Programa {
  public nombre: string;
  public version: number;

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  getVersion() {
    return this.version;
  }
  setVersion(version: number) {
    this.version = version;
  }
}
var programa = new Programa();
programa.lanzamiento(); //Se usa la funcion creada en el decorador

//Logica del formulario

var programas = [];

function guardar() {
  var nombre = (<HTMLInputElement>(
    document.getElementById("nombre")
  )).value.toString();

  var programa = new Programa();
  programa.setNombre(nombre);
  programa.setVersion(1);

  programas.push(programa);

  var list = "";

  for (var i = 0; i < programas.length; i++) {
    list = list + "<li>" + programas[i].getNombre() + "</li>";
  }

  var listado = <HTMLElement>document.getElementById("listado");
  listado.innerHTML = list;

  (<HTMLInputElement>document.getElementById("nombre")).value = "";
}
