const mySubmit = document.getElementById("mySubmit")
const Name = document.getElementById("Name")
const year = document.getElementById("year")
const myH3 = document.getElementById("myH3")
const reset = myH3.textContent

mySubmit.onclick = () => {
    myH3.textContent = reset
    if(Name.value !== "" && year.value !== ""){
        myH3.textContent += `?name=${Name.value}&year=${year.value}`
    }
    else if(Name.value !== ""){
        myH3.textContent += `?name=${Name.value}`
    }
    else if(year.value !== ""){
        myH3.textContent += `?year=${year.value}`
    } 
}