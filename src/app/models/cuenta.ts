export interface Cuenta {
  numerocuenta?: string;
  saldo?: string;
  tipocuenta?: {
    id?: number;
    descripcion?: string;
  };
  cliente?: {
    clienteId?: number;
  };
  banco?: {
    bancoId: number;
  };

  estado?: {
    estadoId?: number;
    descripcion?: string;
  };
  saldoInicial?: string;
}

// {
//   "numerocuenta": "85595944944944949",
//   "saldo": "953.20",
//   "tipocuenta": {
//       "id": 1,
//       "descripcion": "CUENTA AHORRO"
//   },
//   "cliente": {
//     "clienteId": 39
//   },
//   "banco": {
//     "bancoId": 3
//   },
//   "estado": {
//     "estadoId": 1,
//       "descripcion": "ACTIVO"
//   },
//   "saldoInicial": "953.00"
// }
