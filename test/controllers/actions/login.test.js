var testHelper = require('../../test_helper');
var should = testHelper.should;
var waterlock = testHelper.waterlock_local;

var login = waterlock.actions.login;

describe('login action', function(){

  it('should exist', function(done){
    login.should.be.Function;
    done();
  });


  it('should respond with error', function(done){
    var req = {
      method: 'PUT',
      params: {
         email: 'test@test.com',
         password: 'testtesttest'
      }
    };
    var res = {
      json: function(code){
         code.should.equal(200);
         done();
      }
    };
    login(req, res);
  });

});
