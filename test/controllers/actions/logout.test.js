var testHelper = require('../../test_helper');
var should = testHelper.should;
var waterlock = testHelper.waterlock_local;

var logout = waterlock.actions.logout;

describe('logout action', function(){
  it('should exist', function(done){
    logout.should.be.Function;
    done();
  });
});
