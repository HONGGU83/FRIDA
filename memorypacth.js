
const memoryrange = Process.enumerateRanges("rw");

//console.log(memoryrange);

//-- Registered to
var searchStr = "61 61";

for( var i=0; i<memoryrange.length; i++){
    var memory = Memory.scan(memoryrange[i].base, memoryrange[i].size, searchStr,{
        onMatch: function(address, size){
            console.log(address);
            console.log(address.readUtf8String());

           
            address.writeUtf8String("modifysuccess");
            console.log(address.readUtf8String());
        },

        onError: function(reason){
            console.log("-- error: " + reason);
        },

        onCompete: function(){
            console.log("-- finished ---");
        },
    });
}
