export interface Cliente {
  clienteId?: number;
  nombre?: String;
  apellidoPaterno?: String;
  apellidoMaterno?: String;
  fechaNacimiento?: String;
  distrito?: {
    distritoId?: number;
    nombre?: String;
  };
  direccion?: String;
  tipoDocumento?: {
    tipoDocumentoId?: number;
    descripcion?: String;
  };
  numeroDocumento?: String;
  email?: String;
  celular?: String;
  genero?: {
    generoId: number;
    descripcion: String;
  };
  fechaRegistro?: String;
  userName?: String;
  password?: String;
}

// {
//   "nombre":"Juana",
//   "apellidoPaterno":"Perez",
//   "apellidoMaterno":"Ruiz",
//   "fechaNacimiento":"1992-09-16",
//   "distrito":{
//      "distritoId":1,
//      "nombre":"Miraflores"
//   },
//   "direccion":"Calle 123",
//   "tipoDocumento":{
//      "tipoDocumentoId":2,
//      "descripcion":"CE"
//   },
//   "numeroDocumento":"12345678",
//   "email":"josue@hotmail.com",
//   "celular":"987456123",
//   "genero":{
//      "generoId":1,
//      "descripcion":"FEMENINO"
//   },
//   "fechaRegistro":"2020-11-22",
//   "userName":"joshua",
//   "password":"123456789"
// }
