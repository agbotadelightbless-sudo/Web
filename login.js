
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "22446") {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
      check.style.color = "red"
      //  alert("Incorrect username or password");
        document.getElementById("check").innerHTML =
          "Incorrect details";
    }
}

fetch("header1.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });
      