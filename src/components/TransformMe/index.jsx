import MealPlanner from "./MealPlanner";
import WeightTracker from "./WeightTracker";

function TransformMe() {
  return (
    <div>
      <h1 style={{ fontSize: "4em" }}>Tracking my progress</h1>
      <br />
      <p>I will be starting my journey with the following:</p>
      <ul>
        <li className="driving-me">
          16:8 fasting. This means I will eat all my meals within an 8 hour
          window and fast for the remaining 16 hours. I will eat between 11am and 7pm.
        </li>
        <li className="driving-me">
          Tracking my meals using MyFitnessPal. Whilst following a fasting plan,
          I will keep my calories in and around 1800 per day.
        </li>
        <li className="driving-me">
          Tracking my exercise using my apple watch. I will aim to close my
          apple rings each day
        </li>
      </ul>
      <p>
        Once I have got my self into a routine I will build in exercise and
        fitness
      </p>
      <MealPlanner />
      <WeightTracker/>
      <br />
    </div>
  );
}

export default TransformMe;
