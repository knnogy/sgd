"use strict";
var environments = [
    'bel_qa01',
    'qa06',
    'cust01',
    'qa23',
    'qa31',
    'qa23',
    'qa25',
    'gsqa01',
    'gsqa02',
    'gsdev02',
    'gsdev03',
    'bel_gsdev01',
    'qa02',
];
var services = ['SGD', 'WEB', 'skateboardSGD', 'PGF'];
var domains = ['rgsmvn', 'rgsmvn-dev'];
var domain;
function start() {
    var selectENV = document.getElementById('envSelect');
    var selectSER = document.getElementById('serviceSelect');
    environments.forEach(function (env) {
        var option = document.createElement('option');
        option.innerHTML = env;
        selectENV.appendChild(option);
    });
    services.forEach(function (service) {
        var option = document.createElement('option');
        option.innerHTML = service;
        selectSER.appendChild(option);
    });
}
function deploy() {
    var envSelect = document.getElementById('envSelect');
    var environment = environments[envSelect.selectedIndex];
    if (environment == 'bel_qa01' ||
        environment == 'gsdev02' ||
        environment == 'gsdev03' ||
        environment == 'bel_gsdev01') {
        domain = domains[1];
    }
    else {
        domain = domains[0];
    }
    var serviceSelect = document.getElementById('serviceSelect');
    var service = services[serviceSelect.selectedIndex];
    var gameSelect = document.getElementById('gameSelect');
    var gameVersion = gameSelect.value;
    console.log(gameVersion);
    if (gameVersion.length < 1)
        alert('no game added');
    else
        window.open('http://deploy.corp.wagerworks.com:7000/deployer/php/deployment.php?action=deployapp&release=' +
            service +
            '-' +
            gameVersion +
            '.zip&service=' +
            service +
            '&env=' +
            environment +
            '&domain=' +
            domain);
    //http://deploy.corp.wagerworks.com:7000/deployer/php/deployment.php?action=deployapp&release=SGD-MegaJackpotsCleopatra.ML1.0.0.CL296924.V1.0.6_142.zip&service=SGD&env=qa06&domain=rgsmvn
    //http://deploy.corp.wagerworks.com:7000/deployer/php/deployment.php?action=deployapp&release=WEB-mysteryExpress.1.0.3.SNAPSHOT.installation.zip&service=WEB&env=bel_qa01&domain=rgsmvn-dev
    //window.open("http://deploy.corp.wagerworks.com:7000/deployer/php/deployment.php?action=deployapp&release=" + service + "-" + gameVersion +	".installation.zip&service=" + service + "&env=" + environment + "&domain=" + domain);
}
