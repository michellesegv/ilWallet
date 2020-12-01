export interface Tarjeta {
  cuenta?: {
    id?: number;
  };
  tipotarjeta?: {
    id?: number;
  };
  marcatarjeta?: {
    marcarTajertaId: number;
  };
  numeroTarjeta?: {
    estado?: {
      estadoId?: number;
    }
  };
}

// {
//   "cuenta": {
//     "id": 1
//   },
//   "tipotarjeta": {
//     "id": 1
//   },
//   "marcatarjeta": {
//     "marcarTajertaId": 1
//   },
//   "numeroTarjeta": "1235698745236980",
//     "estado": {
//     "estadoId": 1
//   }
// }
