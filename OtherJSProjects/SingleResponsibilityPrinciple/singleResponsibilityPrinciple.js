import logMessage from "./logger.js";
// learn about Single Responsibility Design pattern from
// https://www.youtube.com/watch?v=UQqY3_6Epbg

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      //this.logCalorieSurplus();
      logMessage("Max calories exceeded");
    }
  }

  /*
  logCalorieSurplus() {
    console.log("Max calories exceeded");
  }
*/
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(2700);
