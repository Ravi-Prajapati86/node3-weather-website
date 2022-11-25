const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ccc8f4f4feff32c27c2cdec386796b0e&query='+latitude+','+longitude+'&units=m'
    console.log('forecast url '+url)
    
    request({url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weatherstack service!',undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        } else {
            console.log(response.body.current)
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It feels like "+response.body.current.feelslike+" degress out. The humidity is "+response.body.current.humidity+"%.")
        }
    })
}

module.exports = forecast