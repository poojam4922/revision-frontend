let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let emailValue = document.querySelector(".email").value.trim();
  let passwordValue = document.querySelector(".password").value.trim();
  let emailError = document.querySelector(".emailError");
  let passwordError = document.querySelector(".passwordError");
  let successMessage = document.querySelector(".successMessage");
  // ...............Reset the error................
  emailError.innerText = "";
  passwordError.innerText = "";

  // Validate email
  if (
    emailValue.length < 3 ||
    emailValue.indexOf("@") === -1 ||
    emailValue.indexOf(".") === -1
  ) {
    console.log("enter in email");
    emailError.innerText =
      "Make sure email is more than 3 characters and has @ and a .";
  }

  // Validate password
  if (passwordValue.length < 8) {
    console.log("enter in password");
    passwordError.innerText = "Password must be at least 8 characters long";
  }

  // If both email and password are valid
  if (
    emailValue.length >= 3 &&
    emailValue.indexOf("@") !== -1 &&
    emailValue.indexOf(".") !== -1 &&
    passwordValue.length >= 8
  ) {
    console.log("email and password verified");
    successMessage.style.color = "green";
    successMessage.textContent = "All good to go";

    // Show confirmation window
    const confirmation = confirm("Are you sure you want to sign up?");
    if (confirmation) {
      alert("Successful signup!");
    } else {
      // Redirect to the same page and clear input values
      window.location.href = window.location.href;
      document.querySelector(".email").value.innerText = "";
      document.querySelector(".password").value.innerText = "";
    }
  }
});
