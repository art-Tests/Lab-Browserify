var DBonus = (function(){
    function Computed(salary){
        return salary * 1.5
    }
    return {
        Computed : Computed
    }
})()
try {
    module.exports = DBonus
} catch (error) {
    
}