let r = prompt("Enter radius of circle")
let area = Math.PI * (r^2)
let perimeter = 2 * Math.PI * r
document.getElementById("area").innerHTML = "Area of circle whose radius = " + r + " is " + area
document.getElementById("perimeter").innerHTML = "Perimeter of circle whose radius = " + r + " is " + perimeter