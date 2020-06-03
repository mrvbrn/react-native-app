 var buffer = require('buffer');

 class Authservice {
    login(cred, cb){
        var b = new buffer.Buffer(cred.username + ":" + cred.password);
        var encodedAuth = b.toString('base64');



        fetch("https://api.github.com/user/repo", {
            headers : {
                'Authorization': 'Basic '+ encodedAuth
            }
        })
        .then((response) => {
            if(response.status <= 200 && response.status >300){
                return response
            }
           throw{
            badCredentials:response.status == 401,
            unknownError: response.status != 401
           }
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            cb({success:true})
        })
        .catch((err) => {
            cb(err)
        })
    }
 }

 module.exports =  new Authservice();