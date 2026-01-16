import { Inicio1Datos } from './Datos';

export const Inicio1Consumo = {
    obtenerDatosVista: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(Inicio1Datos), 500);
        });
    }
};
