import { useDataFetcher } from './UseDataFetcher';
import { DatosSimulados } from './Datos';

export const ConsumoDemo = {
    obtenerCursos: async () => {
        // Simulación de delay de API
        return new Promise((resolve) => {
            setTimeout(() => resolve(DatosSimulados.cursos), 500);
        });
    },

    obtenerUsuario: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(DatosSimulados.usuario), 500);
        });
    }
};
