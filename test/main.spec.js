var Nightmare = require('nightmare');
var expect = require('chai').expect;
var axios = require('axios');

var nightmare;
const url = 'http://localhost:8080';

describe('hello-express', function () {
  this.timeout(6500);
  this.slow(3000);
  
  beforeEach(()=> {
    nightmare = Nightmare();
  })
  
  
});
