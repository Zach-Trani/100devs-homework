document.querySelector('#check').addEventListener('click', check)


function check() {
  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    alert("class day!")
  }else if(day === "saturday" || day === "sunday"){
    alert("WEEKEND!")
  }else {
    alert("boring day")
  }
  // document.querySelector('#placeToSee').innerText = msg
}


