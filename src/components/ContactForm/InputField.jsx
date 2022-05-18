const InputField = (props) => {
    
    return (
        <section>
            <label for={props.for} className={`${props.className}`}> {props.children} </label>
            <input type={props.type} id={props.id} pattern={props.pattern} placeholder={props.placeholder} />
        </section>
    )
}

export default InputField;