try {
    // nodejs
    var expect = require("chai").expect
    var Calculator = require("../Src/Calculator")
} catch (e) {
    // browser
    var expect = chai.expect
}

describe("Calculator Test",function(){
    it('1 + 1 應該等於 2',function(){
        expect(Calculator.Add(1,1)).to.be.equal(2)
    })

    it('任何數加0應該等於自己',function(){
        expect(Calculator.Add(3,0)).to.be.equal(3)
    })
})