document
  .querySelector("#homeBtn")
  .addEventListener("click", () => homeState.f());
document
  .querySelector("#archiveBtn")
  .addEventListener("click", () => archiveState.f());

productLib.forEach((element) => {
  const productFromLib = new Product(
    element.foodName,
    element.foodScale,
    element.foodKcal
  );
  productFromLib.draw();
});

UISaveProductBtn.addEventListener("click", saveProductToLib);
function saveProductToLib(e) {
  e.preventDefault();
  const newProduct = new Product();
  newProduct.loadFromUI();

  if (productLib.length === 0) {
    newProduct.addToLib();
    newProduct.draw();
    UIName.value = newProduct.name;
  }

  let duplicateCounter = 0;
  productLib.forEach((el) => {
    if (el.foodName.toLowerCase() != newProduct.name.toLowerCase()) {
      duplicateCounter++;
      if (duplicateCounter === productLib.length) {
        newProduct.addToLib();
        newProduct.draw();
        UIName.value = newProduct.name;
        drawMsgModal("Product saved to the library!");
        console.log(productLib.indexOf(el));
        console.log(productLib.length);
        console.log(duplicateCounter);
      }
    } else if (
      el.foodName === newProduct.name &&
      el.foodKcal != newProduct.kcal
    ) {
      productLib[productLib.indexOf(el)].foodKcal = newProduct.kcal;
      localStorage.setItem("products", JSON.stringify(productLib));
      drawMsgModal("Product rewritten!");
    } else if (el.foodName === newProduct.name) {
      drawMsgModal("Such a product already exists!");
    }
  });
  duplicateCounter = 0;
}

UIDeleteBtn.addEventListener("click", deleteProduct);
function deleteProduct() {
  const initialLength = productLib.length;
  productLib.forEach((element, index) => {
    if (element.foodName.indexOf(UIProductName.value) != -1) {
      productLib.splice(productLib.indexOf(element), 1);
      drawMsgModal("Product deleted!");
    }
    if (
      index + 1 === productLib.length &&
      productLib.length === initialLength
    ) {
      drawMsgModal("There's no such product to delete!");
    }
  });
  UILibrary.innerHTML = "";
  productLib.forEach((element) => {
    const productFromLib = new Product(
      element.foodName,
      element.foodScale,
      element.foodKcal
    );
    productFromLib.draw();
  });
  localStorage.setItem("products", JSON.stringify(productLib));
}

document.querySelector("#editorBtn").addEventListener("click", toModal);
function toModal() {
  UIProductName.value = UIName.value;
  productLib.forEach((element) => {
    if (element.foodName.indexOf(UIProductName.value) != -1) {
      UIProductKcal.value = element.foodKcal;
    }
  });
}

UIName.addEventListener("input", dropdownUpdate);
function dropdownUpdate() {
  document.querySelector("#UIDropdownItems").innerHTML = "";
  productLib.forEach((element) => {
    if (
      element.foodName.toLowerCase().indexOf(UIName.value.toLowerCase()) != -1
    ) {
      const next1to5Li = document.createElement("li");
      next1to5Li.innerHTML = `<a id="list${element.foodName}" class="dropdown-item" href="#">${element.foodName}</a>`;
      document.querySelector("#UIDropdownItems").appendChild(next1to5Li);
      document
        .querySelector(`#list${element.foodName}`)
        .addEventListener("click", toInput);
      document
        .querySelector(`#list${element.foodName}`)
        .addEventListener("click", checkIfCanEat);
      function toInput() {
        UIName.value = element.foodName;
        document.querySelector("#UIDropdownItems").innerHTML = "";
      }
    }
  });
}

document.addEventListener("keyup", checkIfCanEat);
document.addEventListener("click", checkIfCanEat);
function checkIfCanEat() {
  UIYummy.disabled = true;
  UIKcal.placeholder = "";
  productLib.forEach((element) => {
    if (UIName.value === element.foodName) {
      UIYummy.disabled = false;
      UIKcal.placeholder = `${
        element.foodScale === 2
          ? element.foodKcal * UIQuant.value
          : (element.foodKcal * UIQuant.value) / 100
      } kcal`;
      element.foodScale === 1
        ? (UIScale.textContent = "g")
        : (UIScale.textContent = "pc.");
    }
  });
  if (UIQuant.value === "" || UIQuant.value === null || UIQuant.value === 0) {
    UIYummy.disabled = true;
    UIKcal.placeholder = "";
  }
}

UIQuant.addEventListener("input", restrictNegative);
function restrictNegative(e) {
  e.preventDefault();
  if (e.target.value < 0) {
    e.target.value = 0;
  }
}

UIYummy.addEventListener("click", eat);
function eat() {
  let currentScale;
  let currentKcal;
  productLib.forEach((element) => {
    if (UIName.value === element.foodName) {
      currentScale = element.foodScale;
      currentKcal = element.foodKcal;
    }
  });
  const newMeal = new Meal(
    UIName.value,
    currentScale,
    currentKcal,
    UIQuant.value
  );
  newMeal.eatSave();
  newMeal.countTotalKcal();
  drawTable(newMeal);
}

function drawTable(meal) {
  const newMealLine = document.createElement("tr");
  newMealLine.innerHTML = `
    <th scope="row">${meal.name}</th>
    <td>${meal.amount}</td>
    <td>${meal.scale === 1 ? "g" : "pc."}</td>
    <td>${
      meal.scale === 2
        ? meal.amount * meal.kcal
        : (meal.amount * meal.kcal) / 100
    }</td>
    <td><button type="button" class="btn-close del_${meal.name}_${
    meal.amount
  }" aria-label="Close"></button></td>
    `;
  UIList.appendChild(newMealLine);
  Array.from(
    document.querySelectorAll(`.del_${meal.name}_${meal.amount}`)
  ).forEach((el) => {
    if (el.classList.contains("with_del_function") === false) {
      el.addEventListener("click", deleteLine);
      el.classList.add("with_del_function");
    }
  });
  function deleteLine(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
    let currentMealRemoved = false;
    belly.forEach((element) => {
      if (
        element.foodName === meal.name &&
        element.foodAmount === meal.amount &&
        currentMealRemoved === false
      ) {
        belly.splice(belly.indexOf(element), 1);
        currentMealRemoved = true;
      }
    });
    localStorage.setItem("belly", JSON.stringify(belly));
    meal.countTotalKcal();
  }
}

belly.forEach((element) => {
  const mealToDraw = new Meal(
    element.foodName,
    element.foodScale,
    element.foodKcal,
    element.foodAmount
  );
  mealToDraw.countTotalKcal();
  drawTable(mealToDraw);
});

UIClear.addEventListener("click", clearAll);
function clearAll() {
  if (UIClear.textContent === "Clear All") {
    UIClear.firstElementChild.textContent = "Yes I'm sure";
  } else if (UIClear.firstElementChild.textContent === "Yes I'm sure") {
    belly = [];
    localStorage.setItem("belly", JSON.stringify(belly));
    productLib = [];
    localStorage.setItem("products", JSON.stringify(productLib));
    UIList.innerHTML = "";
    UILibrary.innerHTML = "";
    totalKcal = 0;
    UITotalKcal.textContent = 0;
    UIClear.firstElementChild.textContent = "Clear All";
  }
}

UISaveToArchive.addEventListener("click", () => {
  saveDay();
});

function drawMsg(msg) {
  const alert = document.createElement("div");
  alert.classList = "alert alert-success mt-4";
  alert.role = "alert";
  alert.innerHTML = `<h4 class="alert-heading">${msg}</h4>`;
  UIMsg.appendChild(alert);
  setTimeout(() => {
    UIMsg.innerHTML = "";
  }, 1500);
}

function drawMsgModal(msg) {
  const alert = document.createElement("div");
  alert.classList = "alert alert-success mt-4";
  alert.role = "alert";
  alert.innerHTML = `<h6 class="alert-heading">${msg}</h6>`;
  UIModalMsg.appendChild(alert);
  setTimeout(() => {
    UIModalMsg.innerHTML = "";
  }, 1500);
}
