var namesarray= [];
function submit()
{
    var namea1= document.getElementById("name1").value
    var namea2= document.getElementById("name2").value
    var namea3= document.getElementById("name3").value
    var namea4= document.getElementById("name4").value

namesarray.push(namea1)
namesarray.push(namea2)
namesarray.push(namea3)
namesarray.push(namea4)
console.log(namesarray)
document.getElementById("div2").innerHTML=namesarray
document.getElementById("b1").style.display="none"
document.getElementById("b2").style.display="inline-block"
}
function sorting()
{
namesarray.sort()
console.log(namesarray)
document.getElementById("div2").innerHTML=namesarray
}