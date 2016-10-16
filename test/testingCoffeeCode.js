var should = require('should');
var fill = require('../lib/coffeeCode.js');

describe('Coffee script is compiled w/out error', function() {
    it('when this has passed', function() {
	fill('mug', 'coffee').should.equal('Filling the mug with coffee');
   });
});
