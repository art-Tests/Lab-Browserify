try {
    // nodejs
    var expect = require("chai").expect
    var SBonus = require("../src/SBonus")
    var DBonus = require("../src/DBonus")
    var CalculateBonus = require("../src/CalculateBonus")
} catch (e) {
    // browser
    var expect = chai.expect
}

describe("Bonus Test",function(){
    it('基本薪一萬，等級S應為30000',function(){
        expect(CalculateBonus.ComputeSalary(SBonus,10000)).to.be.equal(30000)
    })
    it('基本薪一萬，等級D應為15000',function(){
        expect(CalculateBonus.ComputeSalary(DBonus,10000)).to.be.equal(15000)
    })
})