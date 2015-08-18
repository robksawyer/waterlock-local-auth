var testHelper = require('../../test_helper');
var should = testHelper.should;
var waterlock = testHelper.waterlock_local;

var register = waterlock.actions.register;

describe('register action', function(){
  it('should exist', function(done){
    register.should.be.Function;
    done();
  });

  it('should respond with 200', function(done){
    var req = {
      method: 'POST',
      params: {
         email: 'test@test.com',
         password: 'testertest11!!'
      }
    };
    var res = {
		json: function(code){
         code.should.equal(200);
         done();
      }
    };
    register(req, res);
  });
});
