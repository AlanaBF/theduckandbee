function MealPlanner() {
  return (
    <div>
      <h1 style={{ fontSize: "4em" }}>Meal Tracker: Weekly Menu</h1>
      <table>
        <thead>
          <tr>
            <th>Meal Time</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast Options: 11am</td>
            <td>
              <ul>
                <li>
                  All Bran (40g) and sultanas (30g) with 250ml of strawberry
                  kefir yogurt drink
                </li>
                <li>
                  Boiled egg with toast, cherry tomatoes, sliced avocado, and a
                  drizzle of balsamic glaze
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Lunch Options: 1.30pm</td>
            <td>
              <ul>
                <li>Tuna mayo Jacket Potato</li>
                <li>
                  Baked beans and grated extra mature cheddar cheese Jacket
                  Potato
                </li>
                <li>
                  Chilli and garlic tuna mayo and cheese triangles Jacket Potato
                </li>
                <li>Cottage cheese and chives Jacket Potato</li>
                (Each served with a selection of pickles such as kimchi,
                beetroot, gherkins, pickled onions, olives, and peppers in
                brine.)
                <li>
                  Homemade hummus with wholemeal pitta bread, carrots, red
                  peppers, and cherry tomatoes
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Snack Options: 4pm</td>
            <td>
              <ul>
                <li>
                  Fresh fruits such as clementines, kiwi, banana, berries and
                  pineapple
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Dinner: 6pm</td>
            <td>Gousto Meals</td>
          </tr>
          <tr>
            <td>Hydration</td>
            <td>
              Aim to drink 2 liters of water throughout the day and supplement
              with herbal teas.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default MealPlanner;
