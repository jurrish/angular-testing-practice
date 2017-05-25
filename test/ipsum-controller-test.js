'use strict';

//make sure this happens before our app gets loaded
const angular = require('angular');
const expect = require('chai').expect;
//angular gives us a mock function/property attached to angular object
require('angular-mocks');

describe('testing IpsumController', function(){
  //instantiates our controller before each test
  //we use arrow functions so we can reach into jasmine's scope setup.
  beforeEach(() => {
    angular.mock.module('ipsumApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.ipsumCtrl = new $controller('IpsumController');
      this.ipsumCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have an initial state', () => {
    expect(this.ipsumCtrl.selected).toEqual('hacker');
  });

  it('handleSubmit should generate ipsum', () => {
    expect(this.ipsumCtrl.content).toEqual('');
    this.ipsumCtrl.handleSubmit();
    expect(this.ipsumCtrl.content.length).toBeGreaterThan(0);
  });
});
