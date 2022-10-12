import Resultados from "../models/informe_resultado.js";

const HelpersInforme_resultado = {
    existeInformeById: async (id) => {
        const existe = await Resultados.findById(id)
        if (!existe) {
          throw new Error(`El id  ${id} no existe`)
        }
      },
}
export default HelpersInforme_resultado;              
