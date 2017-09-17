function loadFlipCards() {
  fetch("http://localhost:3000/users")
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      var users = json
      var userList = document.querySelector("#usersList")
      for (var i = 0; i < users.length; i++) {
        var li = document.createElement("li")
        li.innerHTML = users[i].username
        usersList.appendChild(li)
      }
      console.log(json)
    })
    .catch(function(error) {
      console.log("error", error)
    })
}
var userBtn = document.querySelector("#Btn")

userBtn.addEventListener("click", function() {
  loadFlipCards()
})
