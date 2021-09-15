var btn = document.getElementById("convert")

btn.addEventListener("click", function(e) {
    var deci = document.getElementById("decimal").value
    if(/^\d+$/.test(deci))
    {
      let romanNumObj = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000,
        "M_V": 4000,
        "_V": 5000,
        "M_X": 9000,
        "_X":10000,
        "_X_L":40000,
        "_L":50000,
        "_X_C":90000,
        "_C":100000,
        "_C_D":400000,
        "_D":500000,
        "_C_M":900000,
        "_M":1000000  
      }
      
      let romanKeys = Object.keys(romanNumObj)
      let romanValues = Object.values(romanNumObj)
      
      let romanNumArr = []
      
      for (let i=romanValues.length-1; i>=0; i--) 
      {
        // what I did was from the bottom of the object to subtract with number
        // so greatest numbers subtract the given num
        while (deci - romanValues[i] >= 0) 
        {
          deci = deci - romanValues[i]
          romanNumArr.push(romanKeys[i])
          console.log(romanValues[i], romanKeys[i])
        }
      }
      console.log(romanNumArr.join(""))
      var roman = romanNumArr.join("")
      document.getElementById("roman").value = roman
    }
    else
    {
      alert("Please enter a valid number")
      document.getElementById("decimal").value = ""
      document.getElementById("roman").value = ""
    }
    })

var reset = document.getElementById("reset")
reset.addEventListener("click", function(e) {
    document.getElementById("decimal").value = ""
    document.getElementById("roman").value = ""
})