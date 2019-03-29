var fs = require("fs");


exports.integer = function(value) {
    if(!Number.isInteger(parseInt(value))){
        return false;
    }
    return true;
}

exports.string = function(value) {
    if(typeof value === 'string'){
        return true;
    }else{
        return false;
    }
}

exports.email = function(value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

exports.password = function(value, min) {
    if(value.length >= min){
        return true;
    }else{
        return false;
    }
}

exports.firstname = function(value) {
    var text = fs.readFileSync("./dataset/firstname.txt").toString('utf-8');;
    data = text.split("\n");
    if(value.length >= 3){
        if(data.indexOf(value) !== -1){
            return true;
        }
    }

    return false;
}


