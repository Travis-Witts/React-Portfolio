import "./style.css"

function TextArea(props) {
    return (
        <div className="form-group query-area">
            <textarea className="form-control" rows="5" {...props} />
        </div>
    );
}

export default TextArea