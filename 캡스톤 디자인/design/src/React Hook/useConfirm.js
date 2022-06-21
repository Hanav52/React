import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("deleting the word");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("are you sure", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>delete the word</button>
    </div>
  );
}
