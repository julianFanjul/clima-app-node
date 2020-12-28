const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8b096b9f8488be6c8bb911d70fd3203b&units=metric`);
    //const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8b096b9f8488be6c8bb911d70fd3203b&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}