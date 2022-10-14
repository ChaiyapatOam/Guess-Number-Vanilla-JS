
var random = Math.floor(Math.random() * 11);
function getValue() {
  console.log(random);
  var input = document.getElementById("inputNumber").value;
  if (!input) input = null;
  console.log("input = " + input);
  const answer = document.getElementById("answer");
  if (input > random) {
    answer.style.color = "red";
    answer.innerHTML = "เยอะเกินไป";
  }
  if (input < random) {
    answer.style.color = "blue";
    answer.innerHTML = "น้อยเกินไป";
  }
  if (input == random) {
    answer.style.color = "green";
    answer.innerHTML = "ถูกต้องแล้ว เย่!";
  }
}
