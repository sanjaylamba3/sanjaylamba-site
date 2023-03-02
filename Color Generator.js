let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let css = document.getElementById("css")

color1.addEventListener("input", gradient)
color2.addEventListener("input", gradient)
css.textContent = `linear-gradient(to right ,   ${color1.value}  ,  ${color2.value })`


function gradient(){
  document.body.style.background = `linear-gradient(to right ,   ${color1.value}  ,  ${color2.value })`
  css.textContent =  document.body.style.background
}



function funky(val){
  return val
}

let answer = funky()? "valid" : "invalid"

console.log(answer)


function day(min){
  let promp
  switch (min){
    case "Sun":
    promp = "its sunday"
    break ;
  };
  switch (min){
    case "Mon":
    promp = "its monday"
    break ;
  };
  switch (min){
    case "Tue":
    promp = "its tuesday"
    break ;
  }
  return promp
}

console.log(day("Tue"))


const person = {
  firstName : "John",
  lastName  : "Doe",
  age       : 50,
  eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;

const first = (a,b) => a+b
document.write(first(2,3))

