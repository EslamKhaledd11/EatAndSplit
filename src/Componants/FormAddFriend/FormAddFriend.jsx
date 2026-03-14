import { useState } from "react";
import Button from "../Button/Button"


function FormAddFriend({ ShowSplitFormView, OnAddFriend }) {
  const [FrinedName, SetFriendName] = useState("");
  const [Friendimage, SetFriendimage] = useState(
    "https://i.pravatar.cc/48?u=499476",
  );

  function handleSubmitAddFriend(e) {
    e.preventDefault();

    if (!Friendimage || !FrinedName) return;
    const id = crypto.randomUUID();
    const newfrined = {
      name: FrinedName,
      image: `${Friendimage}?=${id}`,
      balance: 0,
      id,
    };
    OnAddFriend(newfrined);
    SetFriendName("");
    SetFriendimage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmitAddFriend}>
      <label>
        <span>🐦</span>Friend name
      </label>
      <input
        type="text"
        value={FrinedName}
        onChange={(e) => SetFriendName(e.target.value)}
      />

      <label>
        <span>👌</span>Image URL
      </label>
      <input
        type="text"
        value={Friendimage}
        onChange={(e) => SetFriendimage(e.target.value)}
      />
      <Button>ADD</Button>
    </form>
  );
}

export default FormAddFriend ; 