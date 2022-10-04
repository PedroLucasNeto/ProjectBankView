import { IConta } from './conta';
export interface IExtrato {
  id: number;
  dataTransacao: Date;
  tipoTransacao: string;
  valor: number;
  cliente: IConta;
}
