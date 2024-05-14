import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <li className={classes.meal} key={meal.id}>
        <div>
          <h3>{meal.name}</h3>
          <p className={classes.description}>{meal.description}</p>
          <p className={classes.price}>{`$${meal.price}`}</p>
        </div>
        <form className={classes.form}>
          <label htmlFor={meal.id}>Amount</label>
          <input
            type="text"
            id={meal.id}
            name={meal.id}
            min="1"
            max="99"
            defaultValue="1"
          />
          <button type="submit">+Add</button>
        </form>
      </li>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
