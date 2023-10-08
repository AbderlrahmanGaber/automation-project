import { Page } from '@playwright/test';
import { Config } from "@tests/shared/environment-configuration";
import Login from './login.page';

const { test, expect } = require('@playwright/test');
const config = new Config();
const BOUrl = 'http://Abdelrahman-ramadan:daboalex@backoffice-prelive.andalusiagroup.net:8090/';
const AWSpreliveURL = 'http://Abdelrahman-ramadan:daboalex@awsprelive.andalusiagroup.net/SercurityService/api/security/login/';
// http://backoffice-prelive.andalusiagroup.net:8090/

async function userLogin(pg) {
        const login = new Login(pg);
        pg.setDefaultTimeout(350000);

        
       
        await login.goto(AWSpreliveURL);
        await login.goto(BOUrl);
        // await pg.goto(config.baseUrl);
        await login.performLogin(config.loginUser, config.loginPassword)
}

module.exports = { userLogin }
