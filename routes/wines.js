var data =  [ {id: 1, name:'wine1', desc: 'one' }, {id: 2, name:'wine2', desc: 'two' }, {id:3, name:'wine3', desc: 'three' }, {id:4, name:'wine4', desc: 'four' }, {id:5, name:'wine5', desc: 'five' }];

exports.findAll = function(req, res) {
    var os = require("os");
    data.push({id:6, name:'host', desc: os.hostname() })
    console.log(data);
    res.send(data);
};
 
exports.findById = function(req, res) {
    var picked = data.filter(function(value){ return value.id==req.params.id;})[0]
    res.send(picked);
};