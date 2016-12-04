'use strict'


import mongoose from 'mongoose';

module.exports = function (done){

  const Schema = mongoose.Schema;
  const OBjectId = Schema.ObjectId;

  const User = new Schema({
    name : {type:String, unique:true},
    password :  {type :String}
    nickname : {type : String},
  });

  $.mongodb.model('User',User);
  $.model.Use = $.mongodb.model('User');

  done();
}
