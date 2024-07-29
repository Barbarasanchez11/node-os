const os = require('node:os')

//console.log(os)

function getOs () {

const nombre = os.platform(),
      tipo =os.type(),
      version = os.version(),
      arquitectura = os.arch(),
     cpus= cpus().length,
     mTotal= (os.totalmem() / (1024 ** 2)).toFixed(2) + "MB",
    mLibre= (os.freemem() / (1024 ** 2)).toFixed(2) + " MB"



}

return {

  nombre: nombre,
  tipo : tipo,
   version : version,
   arquitectura: arquitectura,
   cpus: cpus,
   mTotal: ` ${mTotal} MB`,
   mLibre:` ${mLibre} MB`,
}

module.exports = getOs