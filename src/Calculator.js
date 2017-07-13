var Calculator = (function(){
    function Add(x, y){
        return x + y
    }
    return {
        Add:Add
    }
})()
try {
    module.exports = Calculator
} catch (error) {
    
}