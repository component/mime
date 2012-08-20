
/**
 * Module dependencies.
 */

var mime = require('..')
  , assert = require('assert');

describe('mime.lookup(ext)', function(){
  describe('without leading "."', function(){
    it('should return the canonical mime type', function(){
      mime.lookup('png').should.equal('image/png');
    })
  })

  describe('with leading "."', function(){
    it('should return the canonical mime type', function(){
      mime.lookup('.png').should.equal('image/png');
    })
  })

  describe('when lookup fails', function(){
    it('should return undefined', function(){
      assert(null == mime.lookup('rawr'));
    })
  })
})