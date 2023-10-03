let inputName = document.getElementById("name-input");
let inputEmail = document.getElementById("email-input");
let inputMessage = document.getElementById("message-input");

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwVk34w8KhtPy1Sq-H5-aQDFEsxi2gy-OrIog49w4PUW86hHllrXmo2KrpproaJ-3Ol/exec";

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;

  e.preventDefault();

  sendingMessage();

  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert(
        "I have receved your message and I will respond shortly!",
        response
      );
      submitButton.disabled = false;
      sentMessage();
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
});

let sendingMessage = function () {
  submitButton.innerText = "SENDING...";
};

let sentMessage = function () {
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
  submitButton.innerText = "SEND MESSAGE";
};


// Section Navigation

$(document).ready(function () {
  $(".nav-links").on("click", "a[data-target]", function (e) {
    e.preventDefault();

    let targetId = $(this).data("target");
    let targetElement = $("#" + targetId);

    if (targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top,
        },
        1000
      );
    }
  });
});
