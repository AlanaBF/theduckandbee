function WeightTracker() {
  return (
    <div>
      <br />
      <h1 style={{ fontSize: "4em" }}>Starting Measurements</h1>
      <br />
      <p>Weight Goal: 14 stone</p>
      <p>First Weight recorded on:1/4/24 </p>
      <p>Most recent Entry and Time since First Records: </p>
      <table>
        <thead>
          <tr>
            <th>Measurement</th>
            <th>First Entry</th>
            <th>Most recent Entry</th>
            <th>Comparison</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Weight</td>
            <td>18st12.9lb</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Bust</td>
            <td>115cm</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Waist</td>
            <td>126cm </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hips</td>
            <td>143cm</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Thighs</td>
            <td>81cm </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Arms</td>
            <td>40cm </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Fat Mass</td>
            <td>49.8%</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Muscle Mass</td>
            <td>47.7%</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Bone Mass</td>
            <td>2.5%</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Water Mass</td>
            <td>37.1%</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cardiovascular Fitness</td>
            <td>22.4 VO2 Max</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default WeightTracker;
