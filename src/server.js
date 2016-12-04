'use strict'

/**
*practice node.js project
*
*@author Jingyang Yu <Capfish@gmail.com>
*/

import path from 'path';
import ProjectCore from 'project-core';
import creatDebug from 'debug';


const $ = global.$ = new ProjectCore();


//cereate debug function
$.createDebug = function(name){
  return createDebug('my:' + name);
};
const debug = $.createDebug('server');

//load configuration
$.init.add((done) => {
  $.config.load(path.resolve(__dirname, 'config.js'))
  const env = process.env.NODE_ENV || null;
  if(env){
    debug('load env: %s', env);

    $.config.load(path.resolve(__dirname, '../config', env +'.js'));
  }
  $.env = env;
  done();
});


//init mongoDB
$.init.load(path.resolve(__dirname, 'init'))
//load model
$.init.load(path.resolve(__dirname, "models"));


//init Express
$.init.load(path.resolve(__dirname, 'inti', 'express.js'));
$.init.load(path.resolve(__dirname, 'routes'));

//init
$.init((err) => {
  if(err){
    console.error(err);
    process.exit(-1);
  }else{
    console.log('inited [env=%s]', $.env);
  }

  const item = new $.model.User({
    name: `User${$.utils.date('Ymd')}`
    password: '123456',
    nickname: 'nick',
  });
  item.save(console.log);
});
