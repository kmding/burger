var connection = require('./connection.js');

var orm = {
  selectAll: function (tableInput, callback) {
    var queryString = 'SELECT * FROM ' + tableInput;
    connection.query(queryString, function(err, data){
      if(err) throw err;
      callback(data);
    });
  },
  insertOne: function (tableInput, column, value, callback) {
    var queryString = 'INSERT INTO ' + tableInput + ' (' + column + ') VALUE (' + value + ')';
    connection.query(queryString, function(err, data){
      if(err) throw err;
      callback(data);
    });
  },
  updateOne: function (tableInput, column, newVal, condition, conditionVal, callback) {
    var queryString = 'UPDATE ' + tableInput + ' SET ' + column + ' = ? WHERE ' + condition + ' = ?';    ;
    connection.query(queryString, [newVal, conditionVal] function(err, data){
      if(err) throw err;
      callback(data);
    });
  }
};

module.exports = orm;

