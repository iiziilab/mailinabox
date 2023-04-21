const axios = require('axios');
const jwt = require('jsonwebtoken')


const login = (req,res)=>{    
        var config = {
          method: 'POST',
          url: process.env.BASE_URL+'/login',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': process.env.ADMIN_AUTHORIZATION            
          },        
        };    
        axios(config)
          .then(function (response) {        
            const userLogin = response.data;
            return res.status(200).json({ message: "Login Succssfully", data: userLogin, token: jwt.sign({ email: userLogin.email, key: userLogin.api_key }, 'RESTFULAPIs') });             
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const getUserList = (req,res)=>{                     
        const checkAdmin = req.user;
        if(checkAdmin){
        var config = {
          method: 'GET',
          url: process.env.BASE_URL+'/mail/users',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': process.env.ADMIN_AUTHORIZATION            
          },        
        };    
        axios(config)
          .then(function (response) {        
            const userLogin = response.data;
            res.send(userLogin);              
          })
          .catch(function (error) {
            return res.status(400).json({ statusText: "BAD REQUEST", error:"ture", reason : error.response.data}); 
          });
        }else{
            return res.status(500).json({ message: "login required"});             
        }
    }
    const createUser = (req,res)=>{           
        const checkAdmin = req.user;
        if(checkAdmin){
           const data = "email="+req.body.email+"&password="+req.body.password+"&privileges="+req.body.privileges;        
        var config = {
          method: 'POST',
          url: process.env.BASE_URL+'/mail/users/add',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',            
            'Authorization': process.env.ADMIN_AUTHORIZATION
        
          },    
          //data: "email=rk255@dark30.org&password=123456789Rr@&privileges=" 
          data : data
        };    
        axios(config)
          .then(function (response) {        
            const out = response.data;
            return res.status(200).json({ message: "User created Sucessfully", Userdata:out});        
          })
          .catch(function (error) {
            return res.status(400).json({ statusText: "BAD REQUEST", error:"ture", reason : error.response.data}); 
          });
        }else{
            return res.status(500).json({ message: "login required"});             
         }
     }
     const deleteUser = (req,res)=>{           
        const checkAdmin = req.user;
        if(checkAdmin){
           const data = "email="+req.body.email
        var config = {
          method: 'POST',
          url: process.env.BASE_URL+'/mail/users/remove',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',            
            'Authorization': process.env.ADMIN_AUTHORIZATION        
          },              
          data : data
        };    
        axios(config)
          .then(function (response) {        
            const out = response.data;
            return res.status(200).json({ message: "User deleted Sucessfully"});        
          })
          .catch(function (error) {            
            return res.status(400).json({ statusText: "BAD REQUEST", error:"ture", reason : error.response.data}); 
          });
        }else{
            return res.status(500).json({ message: "login required"});             
         }
     }

     const addPrivileges = (req,res)=>{           
        const checkAdmin = req.user;
        if(checkAdmin){
           const data = "email="+req.body.email+"&privilege="+req.body.privilege
        var config = {
          method: 'POST',
          url: process.env.BASE_URL+'/mail/users/privileges/add',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',            
            'Authorization': process.env.ADMIN_AUTHORIZATION      
          },              
          data : data
        };    
        axios(config)
          .then(function (response) {                
            return res.status(200).json({ message: "Add Privilege Sucessfully"});        
          })
          .catch(function (error) {            
            return res.status(400).json({ statusText: "BAD REQUEST", error:"ture", reason : error.response.data}); 
          });
        }else{
            return res.status(500).json({ message: "login required"});             
         }
     }

     const removePrivileges = (req,res)=>{           
        const checkAdmin = req.user;
        if(checkAdmin){
           const data = "email="+req.body.email+"&privilege="+req.body.privilege
        var config = {
          method: 'POST',
          url: process.env.BASE_URL+'/mail/users/privileges/remove',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',            
            'Authorization': process.env.ADMIN_AUTHORIZATION        
          },              
          data : data
        };    
        axios(config)
          .then(function (response) {        
            
            return res.status(200).json({ message: "Privilege Removed Sucessfully"});        
          })
          .catch(function (error) {            
            return res.status(400).json({ statusText: "BAD REQUEST", error:"ture", reason : error.response.data}); 
          });
        }else{
            return res.status(500).json({ message: "login required"});             
         }
     }


     const addAliases = (req,res)=>{           
        const checkAdmin = req.user;
        if(checkAdmin){
           //const data = "update_if_exists="+req.body.update_if_exists+"&privilege="+req.body.privilege

           const data = "update_if_exists="+req.body.update_if_exists+"&address="+req.body.email+"&permitted_senders="+req.body.permitted_senders           
        var config = {
          method: 'POST',
          url: process.env.BASE_URL+'/mail/aliases/add',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',            
            'Authorization': process.env.ADMIN_AUTHORIZATION        
          },              
          data : data
        };    
        axios(config)
          .then(function (response) {        
        
            return res.status(200).json({ message: "addAliases added Sucessfully"});        
          })
          .catch(function (error) {          
            return res.status(400).json({ statusText: "BAD REQUEST", error:"ture", reason : error.response.data}); 
          });
        }else{
            return res.status(500).json({ message: "login required"});             
         }
     }

     const removeAliases = (req,res)=>{           
        const checkAdmin = req.user;
        if(checkAdmin){
           //const data = "update_if_exists="+req.body.update_if_exists+"&privilege="+req.body.privilege

           const data = "update_if_exists="+req.body.update_if_exists+"&address="+req.body.email+"&permitted_senders="+req.body.permitted_senders           
        var config = {
          method: 'POST',
          url: process.env.BASE_URL+'/mail/aliases/add',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',            
            'Authorization': process.env.ADMIN_AUTHORIZATION                   
          },              
          data : data
        };    
        axios(config)
          .then(function (response) {        
        
            return res.status(200).json({ message: "addAliases added Sucessfully"});        
          })
          .catch(function (error) {          
            return res.status(400).json({ statusText: "BAD REQUEST", error:"ture", reason : error.response.data}); 
          });
        }else{
            return res.status(500).json({ message: "login required"});             
         }
     }
     



module.exports = {
    createUser,
    getUserList,
    login,
    deleteUser,
    addPrivileges,
    removePrivileges,
    addAliases,
    removeAliases
}