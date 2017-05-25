'use strict';

const expect = require('chai').expect;

//smoke test is if something doesnt "smoke", it's not working.  smoke test is just making sure shit is plugged in correctly
describe('smoke test', function(){
  it('should pass', function(){
    expect(false).to.equal(false);
  });
  it('should fail', function(){
    expect(true).to.equal(true);
  });
});
