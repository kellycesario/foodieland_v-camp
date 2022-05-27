const InputField = (props) => {
    
    return (
        <>
            <input type={props.type} value={props.value1} className={props.className} pattern={props.pattern} placeholder={props.placeholder} onChange={props.onChange} required/>
        </>
    )
}

export default InputField;