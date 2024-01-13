import { SubMenu } from "../SubComponent/SubMenu";
import { pizza } from "./PizzaMenu";

export function WebMenu() {
  const NumPizzas = pizza.length;
  // const NumPizzas = 0;

  return (
    <main className="menu">
      <h2>Our menu</h2>;
      {NumPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizza.map((pizza) => (
              <SubMenu pizaaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
