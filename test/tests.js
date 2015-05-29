var expect = chai.expect;

describe ('max', function() {
	it('should exist', function() {
		expect(max).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() {max()}).to.throw('Invalid Input');
		expect(function() {max('a')}).to.throw('Invalid Input');
		expect(function() {max(undefined)}).to.throw('Invalid Input');
		expect(function() {max(1, undefined)}).to.throw('Invalid Input');
		expect(function() {max(1, 'a')}).to.throw('Invalid Input');
		expect(function() {max({})}).to.throw('Invalid Input');
		expect(function() {max([])}).to.throw('Invalid Input');
	});
	it('should return the largest number', function() {
		expect(max(1, 2)).to.equal(2);
		expect(max(2, 1)).to.equal(2);
		expect(max(-33, 2)).to.equal(2);
	});
	
} )

describe ('maxOfThree', function() {
	it('should exist', function() {
		expect(maxOfThree).to.not.be.undefined;
	});
	it('should not accept invalid input', function() {
		expect(function() {maxOfThree()}).to.throw('Invalid Input');
		expect(function() {maxOfThree('a')}).to.throw('Invalid Input');
		expect(function() {maxOfThree(undefined)}).to.throw('Invalid Input');
		expect(function() {maxOfThree(1, undefined)}).to.throw('Invalid Input');
		expect(function() {maxOfThree(1, 'a')}).to.throw('Invalid Input');
		expect(function() {maxOfThree({})}).to.throw('Invalid Input');
		expect(function() {maxOfThree([])}).to.throw('Invalid Input');
		expect(function() {maxOfThree(1,2,'a')}).to.throw('Invalid Input');
		expect(function() {maxOfThree(1,2,undefined)}).to.throw('Invalid Input');
		expect(function() {maxOfThree(1,2,null)}).to.throw('Invalid Input');
	});
	it('should return the largest number', function() {
		expect(maxOfThree(1, 2, 0)).to.equal(2);
		expect(maxOfThree(2, 1, 0)).to.equal(2);
		expect(maxOfThree(-33, 2, 1)).to.equal(2);
		expect(maxOfThree(-33, 0, 2)).to.equal(2);
		expect(maxOfThree(2, 0, 1)).to.equal(2);
		expect(maxOfThree(2, 2, 2)).to.equal(2);
	});
} )

describe ('isVowel', function() {
	it('should exist', function() {
		expect(isVowel).to.not.be.undefined;
	});
	it('should not accept invalid input', function () {
		expect(function() {isVowel("")}).to.throw('Invalid Input');
		expect(function() {isVowel(" ")}).to.throw('Invalid Input');
		expect(function() {isVowel(1)}).to.throw('Invalid Input');
		expect(function() {isVowel(undefined)}).to.throw('Invalid Input');
		expect(function() {isVowel(NaN)}).to.throw('Invalid Input');
		expect(function() {isVowel(null)}).to.throw('Invalid Input');
		expect(function() {isVowel({})}).to.throw('Invalid Input');
		expect(function() {isVowel([])}).to.throw('Invalid Input');
	});
	
} )

describe ('rovarspraket', function() {
	it('should exist', function() {
		expect(rovarspraket).to.not.be.undefined;
	});

	
} )

describe ('sum', function() {
	it('should exist', function() {
		expect(sum).to.not.be.undefined;
	});
	
} )

describe ('multiply', function() {
	it('should exist', function() {
		expect(multiply).to.not.be.undefined;
	});
	
} )

describe ('reverse', function() {
	it('should exist', function() {
		expect(reverse).to.not.be.undefined;
	});
	
} )

describe ('findLongestWord', function() {
	it('should exist', function() {
		expect(findLongestWord).to.not.be.undefined;
	});
	
} )

describe ('filterLongWords', function() {
	it('should exist', function() {
		expect(filterLongWords).to.not.be.undefined;
	});
	
} )

describe ('charFreq', function() {
	it('should exist', function() {
		expect(charFreq).to.not.be.undefined;
	});
	
} )