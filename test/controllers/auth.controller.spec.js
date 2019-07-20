const should = require('chai').should();

const controller = require('../../src/controllers/auth.controller')

describe('Auth Controller Test', function() {
  it('Should allow a person over 18 entry', function() {
    user = {age: 19};
    controller.isAuthorized(user).should.equal(true);
  });
  it('Should allow a person over 18 entry', function() {
    user = {age: 17};
    controller.isAuthorized(user).should.equal(false);
  });
  it('Should allow a person over 18 entry', function() {
    user = {age: 18};
    controller.isAuthorized(user).should.equal(true);
  });
});