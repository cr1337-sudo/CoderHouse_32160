import { denormalize, normalize, schema } from "normalizr"
import empresa from "./empresa.json" assert {type:"json"}


// Definimos un esquema de empleado
const empleado = new schema.Entity('empleado');

// Definimos un esquema de organigrama
const organigrama = new schema.Entity('organigrama', {
  gerente: empleado,
  encargado: empleado,
  empleados: [empleado]
});

/* ---------------------------------------------------------------------------------------- */
import util from 'util'

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedEmpresa = normalize(empresa, organigrama);
print(normalizedEmpresa)

console.log(' ------------- OBJETO DENORMALIZADO --------------- ')
const denormalizedEmpresa = denormalize(normalizedEmpresa.result,organigrama,normalizedEmpresa.entities);
print(denormalizedEmpresa)
console.log(JSON.stringify(denormalizedEmpresa).length)



console.log('Longitud objeto original: ', JSON.stringify(empresa).length)
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizedEmpresa).length)


