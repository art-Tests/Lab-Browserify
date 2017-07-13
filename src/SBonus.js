var SBonus = (function(){
    function Computed(salary){
        return salary * 3
    }
    return {
        Computed : Computed
    }
})()
try {
    module.exports = SBonus
} catch (error) {
    
}