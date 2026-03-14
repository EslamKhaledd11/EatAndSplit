import Button from "../Button/Button"

function Frind({ frind, ShowSplitFormView }) {
  return (
    <li>
      <img src={frind.image} alt={frind.name} />
      <h3>{frind.name}</h3>

      {frind.balance < 0 && (
        <p className="red">
          You owe {frind.name} {Math.abs(frind.balance)}€
        </p>
      )}
      {frind.balance > 0 && (
        <p className="green">
          {frind.name} owes you {Math.abs(frind.balance)}€
        </p>
      )}
      {frind.balance === 0 && <p>You and {frind.name} are even</p>}

      <Button onClick={() => ShowSplitFormView(frind)}>Select</Button>
    </li>
  );
}

export default Frind ; 