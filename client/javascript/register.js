function saveNewUser(username, password) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
}
//need to fix
// var redirectFunction = function redirection() {
//   window.location.href =
//     "file:///Users/tylermay/Desktop/flipcards/client/html/index.html"
// }
var newUserBtn = document.querySelector("#registerBtn")
newUserBtn.addEventListener("click", function() {
  let username = document.querySelector("#usernameInput").value
  let password = document.querySelector("#passwordInput").value

  // redirectFunction()
  saveNewUser(username, password)
})
