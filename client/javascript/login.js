function logUser(username, password) {
  fetch("http://localhost:3000/login", {
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
var loginBtn = document.querySelector("#loginBtn")
loginBtn.addEventListener("click", function() {
  let username = document.querySelector("#loginUsername").value
  let password = document.querySelector("#loginPassword").value

  // redirectFunction()
  loginUser(username, password)
})
