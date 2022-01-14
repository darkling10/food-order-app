import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

import { useHttp } from "../../hooks/use-http";

const AvailableMeals = () => {
  const [meals, setmeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  const transformMeals = (responseData) => {
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    setmeals(loadedMeals);
  };

  useEffect(() => {
    fetchMeals(
      {
        url: "https://food-cart-app-4fccf-default-rtdb.firebaseio.com/meals.json",
      },
      transformMeals
    );
    // fetchMeals();
  }, [fetchMeals]);

  // console.log(meals);
  const mealsitem = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {error && <p>{error}</p>}
        <ul>{mealsitem}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
