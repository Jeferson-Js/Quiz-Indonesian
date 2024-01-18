const checkResponse = (question, correct) => {
  let response = document.querySelector(
    'input[name="' + question + '"]:checked'
  );

  if (response) {
    if (response.value === correct) {
      document.getElementById("result" + question.charAt(1)).innerText =
        "Resposta correta!";
      document.getElementById("result" + question.charAt(1)).style.color =
        "green";
    } else {
      document.getElementById("result" + question.charAt(1)).innerText =
        "Incorrect response";
      document.getElementById("result" + question.charAt(1)).style.color =
        "red";
    }
  } else {
    document.getElementById("result" + question.charAt(1)).innerText =
      "Try again!";
    document.getElementById("result" + question.charAt(1)).style.color = "red";
  }
};
