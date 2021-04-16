import "./burger.css";
import BurgerIngredient from "./burgerIngredient/burgerIngredient";

const Burger = (props) => {
  let ingredients = Object.entries(props.ingredients);
  let totalIngredients = [];
  for (let ingredient of ingredients) {
    for (let i = 0; i < ingredient[1]; i++) {
      totalIngredients.push(
        <BurgerIngredient key={ingredient[0] + i} type={ingredient[0]} />
      );
    }
  }
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {totalIngredients.length > 0 ? (
        totalIngredients
      ) : (
        <p>Please start adding ingredients</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
