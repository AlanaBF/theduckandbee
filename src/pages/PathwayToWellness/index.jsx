import TransformMe from "../../components/TransformMe";

function PathwayToWellness() {
  return (
    <div className="pageBackground">
      <div
        style={{
          backgroundColor: "#264653",
          padding: "20px",
          borderRadius: "50px",
        }}
      >
        <h1>About Me:</h1>
        <br />
        <p>
          Years of weight loss trials have taught me a lot, and now as I&apos;m
          navigating my 40s, it&apos;s time for a practical and sustainable
          approach. I&apos;m pairing the 16/8 intermittent fasting method with
          mindful eating and a dedicated exercise regimen to improve my fitness
          and mental clarity.
        </p>
        <p>
          I&apos;m committed to this path and to sharing the highs and lows
          transparently. If you&apos;re on a similar quest, let&apos;s connect
          and support each other.
        </p>
        <h1>Fitness Goals:</h1>
        <br />
        <p>
          I&apos;m on a mission to reclaim my health—to not just feel better,
          but to reengage actively with the sports I love. My goal is to manage
          my weight effectively as I move through this decade of life.
        </p>
        <h1>What&apos;s Driving Me:</h1>
        <br />
        <ul>
          <li className="driving-me">
            I&apos;m working towards a specific weight range before booking a
            well-deserved holiday.
          </li>
          <li className="driving-me">
            Investing in my long-term health is non-negotiable.
          </li>
          <li className="driving-me">
            I want to dive back into the sports that bring me joy.
          </li>
          <li className="driving-me">
            I hope to motivate others by sharing the tangible steps and progress
            in my health journey.
          </li>
        </ul>
      </div>
      <br />
      <TransformMe />
    </div>
  );
}

export default PathwayToWellness;
