let physics = prompt("Enter physisc point")
let chemistry = prompt("Enter chemistry point")
let biography = prompt("Enter biography point")
let totalpoint = parseInt(physics) + parseInt(chemistry) + parseInt(biography)
let avgpoint = totalpoint / 3
document.getElementById("total").innerHTML = "The total point is " + totalpoint
document.getElementById("avg").innerHTML = "The avg point is " + avgpoint