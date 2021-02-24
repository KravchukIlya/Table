const axios = require('axios')

module.exports = {
    getData: async (length, cb) => {
       try {
           let fetch = await axios.get(`http://www.filltext.com/?rows=${length}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)

           if (fetch) cb(fetch.data)
       }catch (e) {
           console.log('getData err', e)
       }
    }
}