import one from './one.js';
import objectToJson from "./two.js";

//console.log(objectToJson());

const summonModules = () =>{
    return {
        "status": "Ok",
        "one": one(),
        "two": objectToJson(),
    }
}

console.log(summonModules()) 
