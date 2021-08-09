const password = document.getElementById("password")
const cpassword = document.getElementById("c-password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
  let messages = []

  if (password.value.length < 6) {
    messages.push("Password must be longer than 6 character\n")
  }

  if (password.value.search(/[0-9]/) < 0) {
    messages.push("Password must contain atleast one number\n")
  }

  if (password.value.search(/[!@#]/) < 0) {
    messages.push("Password must contain one of : ! @ #\n")
  }

  if (
    password.value.search(/[a-z]/) < 0 ||
    password.value.search(/[A-Z]/) < 0
  ) {
    messages.push(
      "Password must contain atleast one uppercase and one lowercase letter\n"
    )
  }

  if (password.value !== cpassword.value) {
    messages.push("The password do not match\n")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join("  ")
  }
})
