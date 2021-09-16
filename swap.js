let input = document.getElementById("decimal").value
function x(){
  return input = input.replace("IV", 'q').replace('IX', 'w').replace("XL", 'e').replace('XC', 'r').replace("CD", 't').replace('CM', 'y').replace("M_V", 'u').replace('M_X', 'o').replace("_X_L", 'p').replace('_X_C', 'k').replace("_C_D", 'j').replace('_C_M', 'h')
  
}
x(input)

let romanNumObj = {
    "I": 1,
    "q": 4,
    "V": 5,
    "w": 9,
    "X": 10,
    "e": 40,
    "L": 50,
    "r": 90,
    "C": 100,
    "t": 400,
    "D": 500,
    "y": 900,
    "M": 1000,
    "u": 4000,
    "v": 5000,
    "o": 9000,
    "x":10000,
    "p":40000,
    "l":50000,
    "k":90000,
    "c":100000,
    "j":400000,
    "d":500000,
    "h":900000,
    "m":1000000  
  }

  let romNums =[]

for (let i=0; i<input.length; i++)
{
    romNums.push(input[i])
}
console.log(romNums)

let romanKeys = Object.keys(romanNumObj)
let romanValues = Object.values(romanNumObj)

let value = []
for (let i=0; i<romNums.length; i++)
{
    let index = romanKeys.indexOf(romNums[i])
    value.push(romanValues[index])
    console.log(value)
}

var result = 0
for (let i=0; i<value.length; i++)
{
    result += value[i]
}
console.log(result)