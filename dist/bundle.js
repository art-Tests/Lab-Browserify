require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"CalculateBonus":[function(require,module,exports){
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
},{}],"Calculator":[function(require,module,exports){
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
},{}],"DBonus":[function(require,module,exports){
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
},{}],"SBonus":[function(require,module,exports){
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
},{}]},{},[]);
