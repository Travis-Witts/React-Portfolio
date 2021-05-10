import "./style.css"

function FormBtn(props) {
    return (
        <button {...props} className="email-btn btn btn-warning">
            {props.children}
        </button>
    );
}

export default FormBtn