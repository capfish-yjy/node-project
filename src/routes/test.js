'use strict'



module.exports = function (done){
  $.router.get('/',function(req, res, next){
    res.end(`now is beijing time${new Date()}`)
  });
  done();
};
