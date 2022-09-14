const pswrd_1 = document.querySelector("#pswrd_1");
const pswrd_2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector(".error-text");
const button = document.querySelector("button");
const show = document.querySelector(".show");

function active() {
  if (pswrd_1.value.length >= 6) {
    button.removeAttribute("disabled");
    button.classList.add("active");
    pswrd_2.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
    button.classList.remove("active");
    pswrd_2.setAttribute("disabled", "");
  }
}

button.onclick = function () {
  if (pswrd_1.value != pswrd_2.value) {
    errorText.style.display = "block";
    errorText.classList.remove("matched");
    errorText.textContent = "Error: Confirm Password Not Match";
    return false;
  } else {
    errorText.style.display = "block";
    errorText.classList.add("matched");
    errorText.textContent = "Passwords Matched";
    return false;
  }
}

function active_2() {
  if (pswrd_2.value != "") {
    show.style.display = "block";

    show.onclick = function () {
      if (pswrd_1.type === "password" && pswrd_2.type === "password") {
        pswrd_1.type = "text";
        pswrd_2.type = "text";
        this.textContent = "hide";
        this.classList.add("active");
      } else {
        pswrd_1.type = "password";
        pswrd_2.type = "password";
        this.textContent = "show";
        this.classList.remove("active");
      }
    }
  } else {
    show.style.display = "none";
  }
}