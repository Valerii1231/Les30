//  1
describe("describe", function () {
    it('test', function () {});
})



// 2
/*
let assert = chai.assert;
describe("validateEmail", function () {

    describe('valid string', function () {
        it('not an empty string', function () {
            assert.equal(validateEmail(''), false);
        });
        it('typeof string', function () {
            assert.equal(validateEmail(222), false, 'number error');
            assert.equal(validateEmail(true), false, 'boolean error');
            assert.equal(validateEmail({}), false, 'object error');
        });
        it('not an empty string', function () {
            assert.equal(validateEmail('      '), false);
        });
    })
    describe('valid data', function () {
        it('Don\'t have the @ or @ the first character', function () {
            assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
        })
    })
    describe('string length', function () {
        it('String length more than 5 characters', function () {
            assert.equal(validateEmail('f,@'), true, 'String length is less than 5 characters');
        })
    })



})

*/

//

/*

let assert = chai.assert;
describe("validateEmail", function () {

    it('not an empty string', function () {
        assert.equal(validateEmail(''), false);
    });
    it('typeof string', function () {
        assert.equal(validateEmail(222), false, 'number error');
        assert.equal(validateEmail(true), false, 'boolean error');
        assert.equal(validateEmail({}), false, 'object error');
    });
    it('not all spaces', function () {
        assert.equal(validateEmail(' '), false);
    });


    it('Don\'t have the @ or @ the first character', function () {
        assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
        assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
    })


    describe('string length', function () {
        it('String length more than 5 characters', function () {

            assert.equal(validateEmail('jf,.,.,.d'), true, 'String length is less than 5 characters');
        })
    })

})

*/




let assert = chai.assert;

describe("validateEmail", function () {

    describe('valid string', function () {
        it('not an empty string', function () {
            assert.equal(validateEmail(''), false);
        });
        it('typeof string', function () {
            assert.equal(validateEmail(222), false, 'number error');
            assert.equal(validateEmail(true), false, 'boolean error');
            assert.equal(validateEmail({}), false, 'object error');
        });
        it('not an empty string', function () {
            assert.equal(validateEmail('      '), false);
        });
    })
    describe('valid data', function () {
        it('Don\'t have the @ or @ the first character', function () {
            assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
        })
    })


    //  2
    describe('string length', function () {
        it('String length is less than 5 characters', function () {
            assert.equal(validateEmail('m@m'), false, 'string length error');

        })
    })

    //  3
    describe('character @', function () {
        it('The string has more than  one character @', function () {
            assert.equal(validateEmail('email@@@gmail.com'), false, 'error in number of @ characters');
        })
    })

    //  4
    describe(' point and @ ', function () {
        it('point after @', function () {
            assert.equal(validateEmail('e.email@gmail.com'), false);
        })
        it('no point after @', function () {
            assert.equal(validateEmail('e.mail@gmailcom'), false);
        })
        it('point before @', function () {
            assert.equal(validateEmail('email.@gmailcom'), false);
        })
    })
})