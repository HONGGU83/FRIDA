setImmediate(function(){
	Java.perform(function(){

		var decrypteClass = Java.use("sg.vantagepoint.a.a")
		decrypteClass.a.implementation = function(arg1, arg2){
			var secret_string = this.a(arg1, arg2);
			var secret_S = ''
			for(var i=0; i<secret_string.length; i++)
			{
				secret_S += String.fromCharCode(secret_string[i])
			}
			console.log("[*] Decrypted : "+secret_S);
			
			if(secret_S .indexOf('I want to believe')>=0){
				secret_S =secret_S .replace('I want to believe','modify success');
			}
			console.log("[*] modify : "+secret_S);
			return secret_string;
		}
	})
})