const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '014291072cmshd2a31314d279007p1dd088jsn354d9fc2e02e' }
    });

    const resp = await instance.get()

    if (resp.data.Results.lenght === 0) {
        throw new Error(` No hay resultados ${dir} `);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}