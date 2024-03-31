import LongTermTracker from "./LongTermTracker";
import ExercisePlan from "./ExercisePlan";
import MealPlanner from "./MealPlanner";
import WaterTracker from "./WaterTracker";
import WeightTracker from "./WeightTracker";

function TransformMe() {
  return (
    <div>
      <h1 style={{ fontSize: "4em" }}>Tracking my progress</h1>
      <br />
      <MealPlanner />
      <br />
      <ExercisePlan />
      <br />
      <WaterTracker />
      <br />
      <WeightTracker />
      <LongTermTracker />
    </div>
  );
}

export default TransformMe;
