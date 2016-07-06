'use strict'; 
class Version {

 constructor(version){
    this._version = version ;
 }

 print(){
    console.log('Version is :'+ this._version);
 }
}

module.exports = Version;