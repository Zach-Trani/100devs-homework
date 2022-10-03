let msg = ""
document.querySelector('#check').addEventListener('click', check)


function check() {
  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    alert("class day!")
    msg = "class day!"
  }else if(day === "saturday" || day === "sunday"){
    alert("WEEKEND!")
    msg = "WEEKEND!"
  }else {
    alert("boring day")
    msg = "boring day"
  }
  // create a to do list (hint: append to ul in the html)
  // let newListItem = document.createElement("placeToSee")
  document.querySelector('#placeToSee').innerText = msg // investigate document.createElement for to-do list
}


