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
  document.querySelector('#placeToSee').innerText = msg
}


