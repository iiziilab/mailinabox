const request = require('request');
const path = require('path')
const axios = require('axios');
const fs = require('fs')
 

const callExternalApiUsingRequest = (callback) => {
var config = {
    method: 'POST',
    url: 'https://3.112.2.20/admin/login',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic aW5mb0BpcC0xNzItMzEtNDUtMS5hcC1ub3J0aGVhc3QtMS5jb21wdXRlLmludGVybmFsOjEyMzQ1Njc4OVJyQA=='
    },
    // key:fs.readFileSync(path.join(__dirname,'./cert/key.pem')),
    // cert:fs.readFileSync(path.join(__dirname,'./cert/cert.pem')),       
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    //   try {
    //     if (checkExistingUser) {
    //       User.update(
    //         { otp: otp },
    //         { where: { mobileNo: mobileNo } }
    //       )
    //     } else {
    //       const createUser = User.create({ userid, fullname, email, mobileNo, password, otp })
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }

    })
    .catch(function (error) {
      console.log(error);
    });
}

// const options = {
//     method: 'POST',
//     'Authorization': 'Basic aW5mb0BpcC0xNzItMzEtNDUtMS5hcC1ub3J0aGVhc3QtMS5jb21wdXRlLmludGVybmFsOjEyMzQ1Njc4OVJyQA==',
//     'Content-Length': '0',
//     key:fs.readFileSync(path.join(__dirname,'./cert/key.pem')),
//     cert:fs.readFileSync(path.join(__dirname,'./cert/cert.pem')),
//     rejectUnauthorized: false 
// };

// const callExternalApiUsingRequest = (callback) => {
//     request(_EXTERNAL_URL, options, (err, res, body) => {
//     if (err) { 
//         return callback(err);
//      }
//      console.log(res.statusCode);
//      res.setEncoding('utf8');
//      res.on('data', (chunk) => {
//         console.log('if')
//          result += chunk;
//      });
 
//      res.on('end', () => {
//         console.log('end')
//          console.log(result);
//      });
//     });
// }

module.exports.callApi = callExternalApiUsingRequest;