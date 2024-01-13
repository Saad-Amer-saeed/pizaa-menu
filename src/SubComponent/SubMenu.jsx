export function SubMenu({ pizaaobj }) {
  return (
    <li className="pizza">
      <img src={pizaaobj.photoName} alt={pizaaobj.name} />
      <div>
        <h3>{pizaaobj.name}</h3>
        <p>{pizaaobj.ingredients}</p>
        <span>{pizaaobj.price}</span>
      </div>
    </li>
  );
}
