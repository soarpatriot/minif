
var assert = require('assert');
var minif = require('./index.js');
var add = function(x){
  return function(y){
    return x + y;
  }
}
describe('compose',function(){
  describe('#compose',function(){
    it('should compose',function(){
      var result = minif.compose(add(2),add(3));
      assert.equal(result(3),8);
    }) 
  })
})
