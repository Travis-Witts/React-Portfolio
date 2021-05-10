import "./style.css";

function Input(props) {
  return (
    <div className="form-group input-area">
      <input className="form-control" {...props} />
    </div>
  );
}

export default Input