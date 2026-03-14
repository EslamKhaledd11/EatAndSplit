import { useState } from "react";
import FormAddFriend from "./Componants/FormAddFriend/FormAddFriend";
import FrindsList from "./Componants/FrindsList/FrindsList";
import FormSplitBill from "./Componants/FormSplitBill/FormSplitBill"
import Button from "./Componants/Button/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



function App() {
  const [Friends, SetFriend] = useState(initialFriends);
  function handleAddFriend(friend) {
    SetFriend((Friends) => [...Friends, friend]);
  }

  const [ShowAddForm, SetShowAddForm] = useState(false);
  function ShowAddFriendForm() {
    SetShowAddForm((ShowAddForm) => !ShowAddForm);
  }

  const [ShowSplitForm, SetShowSplitForm] = useState(false);
  function ShowSplitFormFun(friend) {
    SetShowSplitForm((cur) => {
      return cur?.id === friend.id ? null : friend;
    });
  }

  function handleSplitBill(value) {
    SetFriend((friends) =>
      friends.map((friend) =>
        friend.id === ShowSplitForm.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    SetShowSplitForm(null);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FrindsList
            ShowSplitFormView={ShowSplitFormFun}
            frinds={Friends}
          ></FrindsList>
          {ShowAddForm && <FormAddFriend OnAddFriend={handleAddFriend} />}
          <Button onClick={ShowAddFriendForm}>
            {ShowAddForm ? "Close" : "Add Frind"}
          </Button>
        </div>
        {ShowSplitForm && <FormSplitBill selectedFriend={ShowSplitForm} onSplitBill={handleSplitBill} />}
      </div>
    </>
  );
}






export default App;
