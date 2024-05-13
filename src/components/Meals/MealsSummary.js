import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Chooses your favourite meals from our broad selection of available meals
      </p>
      <p>All meals are cooked with high quality ingredients</p>
    </section>
  );
};

export default MealsSummary;
