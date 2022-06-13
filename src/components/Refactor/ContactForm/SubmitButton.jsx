const SubmitButton = (props) => {
    
    return (
        <button type="submit" className={props.className}> {props.children} </button>
    )
}

export default SubmitButton;