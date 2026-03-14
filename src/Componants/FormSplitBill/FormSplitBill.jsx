import { useState } from "react";
import Button from "../Button/Button";

function FormSplitBill({ selectedFriend  , onSplitBill }) {
  const [Bill, SetBill] = useState("");
  const [Expenses, SetExpenses] = useState("");
  const [WhoIsPaying, SetWhoIsPaying] = useState("you");

  const payedBYFrind = Bill ? Bill - Expenses : "";

function HandleSubmit(e) {
  e.preventDefault();

  if (!Bill || !Expenses) return;

  const value =
    WhoIsPaying === "you"
      ? payedBYFrind
      : -Expenses;

  onSplitBill(value);
}

  return (
    <form className="form-split-bill" onSubmit={HandleSubmit}>
      <h2>Split a Bill With {selectedFriend?.name}</h2>
      <label> Bill Value</label>
      <input
        type="text"
        value={Bill}
        onChange={(e) => SetBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input
        type="text"
        value={Expenses}
        onChange={(e) =>
          SetExpenses(
            Number(e.target.value) > Bill ? Expenses : Number(e.target.value),
          )
        }
      />

      <label>{selectedFriend?.name} Expenses</label>
      <input type="text" disabled value={payedBYFrind} />

      <label>Who is Playing The bill :</label>
      <select
        value={WhoIsPaying}
        onChange={(e) => SetWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill ; 