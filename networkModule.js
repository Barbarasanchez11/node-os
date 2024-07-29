const os = require("node:os")

function getInfonetwork () {
    const interfaces = os.networkInterfaces()
    const network = {}



Object.keys(interfaces).forEach(data => {

    network[data] = interfaces[data].map((dato) => ({
        direccion: dato.address,
        interno: dato.internal,
        familia: dato.family, 
    }))
    
})
return network;
}
module.exports = {
    getInfonetwork
}