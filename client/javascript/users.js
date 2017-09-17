function loadFlipCards() {
  //fetch what is in this link
  fetch("http://localhost:3000/users")
    //whatever we find from the fetch we pass through the function as a response
    .then(function(response) {
      //return the part of the response that is json
      return response.json()
    })
    //then take that json that you found and pass it through this function as json
    .then(function(json) {
      //set the variable to json since that is what you passed through
      var users = json
      //call the element from your index.html where you want to display the json object
      var userList = document.querySelector("#usersList")
      //loop through the json object
      for (var i = 0; i < users.length; i++) {
        //create a list element to display your info in a list
        var li = document.createElement("li")
        //set the innerHTML of the list equal to the usernames that have been pulled from looping the json
        li.innerHTML = users[i].username
        //append the list to whatever element you want from the index.html (in our case it will be the userList)
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
