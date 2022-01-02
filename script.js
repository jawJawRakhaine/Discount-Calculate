const calculate = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  let billAmount = parseFloat(document.getElementById("amount").value);
  let percentage = document.getElementById("discount-percentage").value;
  let discountAmount = document.getElementById("discount-amount");
  let FinalPay = document.getElementById("pay");

  if (billAmount === "" || percentage === "") {
    alert("Please fill in all fields");
  } else if (percentage > 50) {
    alert("Discount percentage cannot be more than 50%");
  } else if (percentage < 0) {
    alert("Discount percentage cannot be less than 0%");
  } else if (isNaN(billAmount)) {
    alert("Please enter a valid number. Can not be a string");
  } else {
    discountAmount.value = ((billAmount * percentage) / 100).toFixed(2);
    FinalPay.value = (billAmount - discountAmount.value).toFixed(2);
  }
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
