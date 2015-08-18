var testHelper = require('../../test_helper');
var should = testHelper.should;
var waterlock = testHelper.waterlock_local;

var login = waterlock.actions.login;

describe('login action', function(){
  it('should exist', function(done){
    login.should.be.Function;
    done();
  });
});
