'use strict';
global.fetch = require('node-fetch')
require('dotenv').config();
const Cognito = require('./cognito/index');

const body = {
   email: process.env.EMAIL,
   password: process.env.PASS
};

async function SignIn() {
    const response = await Cognito.signIn(body.email,body.password);
    console.log(response);
}

SignIn();