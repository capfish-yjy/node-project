'use strict'


import mongoose from 'mongoose';

module.exports = function (done){

  const debug = $.createDebug('init:mongodb');
  debug('connection to mongoDB...');

  const conn = mongoose.createConnection($.config.get('deb.mongodb'));
  $.mongodb = conn;
  $.model = {};

  done();

}
