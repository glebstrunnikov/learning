document.querySelector(".btn").addEventListener("click", count);
function count(e) {
  e.preventDefault();
  const loanSize = Number(document.querySelector("#loan-input").value);
  const interestSize = Number(document.querySelector("#interest-input").value);
  const loanTime = Number(document.querySelector("#time-input").value);

  if (
    isNaN(loanSize) === true ||
    isNaN(interestSize) === true ||
    isNaN(loanTime) === true
  ) {
    document.querySelector(".output-form").style.display = "none";
    document.querySelector(".error-form").style.display = "block";
    document.querySelector(
      ".error-form"
    ).firstElementChild.firstElementChild.textContent = "Enter only numbers!";
    setTimeout(hideError, 3000);
    function hideError() {
      document.querySelector(".error-form").style.display = "none";
    }
  } else if (
    document.querySelector("#loan-input").value === "" ||
    document.querySelector("#interest-input").value === "" ||
    document.querySelector("#time-input").value === ""
  ) {
    document.querySelector(".output-form").style.display = "none";
    document.querySelector(".error-form").style.display = "block";
    document.querySelector(
      ".error-form"
    ).firstElementChild.firstElementChild.textContent = "Fill in all fields!";
    setTimeout(hideError, 3000);
    function hideError() {
      document.querySelector(".error-form").style.display = "none";
    }
  } else if (loanSize <= 0 || interestSize <= 0 || loanTime <= 0) {
    document.querySelector(".output-form").style.display = "none";
    document.querySelector(".error-form").style.display = "block";
    document.querySelector(
      ".error-form"
    ).firstElementChild.firstElementChild.textContent =
      "All numbers must be positive!";
    setTimeout(hideError, 3000);
    function hideError() {
      document.querySelector(".error-form").style.display = "none";
    }
  } else {
    document.querySelector(".loading-form").style.display = "block";
    setTimeout(hideLoadingShowResult, 1500);
    function hideLoadingShowResult() {
      document.querySelector(".loading-form").style.display = "none";
      document.querySelector(".output-form").style.display = "block";

      const totalPaymentResult =
        Math.floor(loanSize * (interestSize / 100 + 1) ** loanTime * 100) / 100;
      const totalInterestResult =
        Math.floor(
          (loanSize * (interestSize / 100 + 1) ** loanTime - loanSize) * 100
        ) / 100;
      const monthlyPaymentResult =
        Math.floor(
          ((loanSize * (interestSize / 100 + 1) ** loanTime) /
            (loanTime * 12)) *
            100
        ) / 100;

      document.querySelector("#total-payment-result").textContent =
        totalPaymentResult;
      document.querySelector("#total-interest-result").textContent =
        totalInterestResult;
      document.querySelector("#monthly-payment-result").textContent =
        monthlyPaymentResult;
    }
  }
}

// добавить ошибку при получении бесконечности - isFinite();
// В формулах ошибка - каждый год проценты считаются с остатка, а не с общей суммы
