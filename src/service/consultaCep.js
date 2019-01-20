const axios = require('axios');


export const get = async (cep,callback) => {
   await axios.get(`http://viacep.com.br/ws/${cep}/json/`).then(
        response => {
            callback(response.data);
        }
    )
}