var CalculateBonus = (function(level,salary){
    function ComputeSalary(strategy,salary){
        return strategy.Computed(salary)
    }
    return {
        ComputeSalary : ComputeSalary
    }
})()
try {
    module.exports = CalculateBonus
} catch (error) {
    
}