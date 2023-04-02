let fruitData;

document.addEventListener("DOMContentLoaded", async () => {
    fruitData = await fetchFruitData();
    populateFruitOptions();
  
    const form = document.getElementById("drinkForm");
    const output = document.getElementById("output");
  
    // Check if the form exists
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const fruit1 = getFruitByName(document.getElementById("fruit1").value, fruitData);
        const fruit2 = getFruitByName(document.getElementById("fruit2").value, fruitData);
        const fruit3 = getFruitByName(document.getElementById("fruit3").value, fruitData);
  
        const drinkInfo = calculateDrinkInfo(fruit1, fruit2, fruit3);
  
        saveDrinkToLocalStorage(drinkInfo);
        updateDrinkCount();
  
        output.innerHTML = `
            Order Date: ${drinkInfo.date.toLocaleDateString()}<br>
            Total Carbohydrates: ${drinkInfo.carbohydrates.toFixed(1)}g<br>
            Total Protein: ${drinkInfo.protein.toFixed(1)}g<br>
            Total Fat: ${drinkInfo.fat.toFixed(1)}g<br>
            Total Sugar: ${drinkInfo.sugar.toFixed(1)}g<br>
            Total Calories: ${drinkInfo.calories.toFixed(1)} kcal
        `;
      });
    }
  
    updateDrinkCount();
  });

async function fetchFruitData() {
  try {
    const response = await fetch("data/fruit_data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching fruit data:", error);
  }
}

function getFruitByName(name, fruitData) {
    return fruitData.find(fruit => fruit.name === name);
}

function populateFruitOptions() {
  const fruitSelects = document.querySelectorAll("select");

  fruitSelects.forEach((select) => {
    fruitData.forEach((fruit) => {
      const option = document.createElement("option");
      option.value = fruit.name;
      option.textContent = fruit.name;
      select.appendChild(option);
    });
  });
}

function calculateDrinkInfo(fruit1, fruit2, fruit3) {
    const currentDate = new Date();
    const totalCarbohydrates = fruit1.nutritions.carbohydrates + fruit2.nutritions.carbohydrates + fruit3.nutritions.carbohydrates;
    const totalProtein = fruit1.nutritions.protein + fruit2.nutritions.protein + fruit3.nutritions.protein;
    const totalFat = fruit1.nutritions.fat + fruit2.nutritions.fat + fruit3.nutritions.fat;
    const totalSugar = fruit1.nutritions.sugar + fruit2.nutritions.sugar + fruit3.nutritions.sugar;
    const totalCalories = fruit1.nutritions.calories + fruit2.nutritions.calories + fruit3.nutritions.calories;
  
    return {
      date: currentDate,
      carbohydrates: totalCarbohydrates,
      protein: totalProtein,
      fat: totalFat,
      sugar: totalSugar,
      calories: totalCalories
    };
}

function saveDrinkToLocalStorage(drinkInfo) {
    const drinks = JSON.parse(localStorage.getItem("drinks")) || [];
  
    drinks.push(drinkInfo);
    localStorage.setItem("drinks", JSON.stringify(drinks));
}

function updateDrinkCount() {
    const drinkCountElement = document.getElementById("drinkCount");
    if (drinkCountElement) {
      const drinks = JSON.parse(localStorage.getItem("drinks")) || [];
      drinkCountElement.textContent = drinks.length;
    }
}