const {CLIENT_ID, CLIENT_SECRET, OAUTH_REDIRECT} = process.env;
const { OAuth2Client } = require("google-auth-library");

const prisma = require("../../db");
const axios = require("axios");
const {oauth2Client} = require("./utils/oauth_client")

//
// El token que está como param. es el que permite obtener la info y credenciales del
// usuario. 
//
// Así podemos actualizar su info en la base de datos

const loginUserGoogle = async (token) => {
    console.log("REDIRECT: " + OAUTH_REDIRECT);
    
  
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
    ];
  
    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'online',
        // If you only need one scope you can pass it as a string
        scope: scopes,
    });
    
    console.log(url);
    return url;
    
}

module.exports = loginUserGoogle;