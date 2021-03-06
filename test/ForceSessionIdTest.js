

var adapterPort         = 3000;
var adapterHost         = "localhost";
var util                = require("swarmutil");
var assert              = require('assert');
globalVerbosity = true;
swarmSettings.authentificationMethod = "testForceSessionId";
var client             = util.createClient(adapterHost, adapterPort, "testUser", "testSession" ,"testTenant");


var msg = "none";
function getGreetings(obj){
    msg = obj.message;
}

setTimeout (
    function(){
        client.startSwarm("LaunchingTest.js","clientCtor");
        client.on("LaunchingTest.js",getGreetings);
    },
    1000);

setTimeout (
    function(){
        assert.equal(msg,"Client swarming!");
        process.exit(1);
    },
    2000);