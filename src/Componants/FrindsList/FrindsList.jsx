import Frind from "../Frind/Frind";

function FrindsList({ ShowSplitFormView, frinds }) {
  return (
    <ul>
      {frinds.map((frind) => {
        return (
          <Frind
            frind={frind}
            key={frind.id}
            ShowSplitFormView={ShowSplitFormView}
          />
        );
      })}
    </ul>
  );
}


export default FrindsList ; 