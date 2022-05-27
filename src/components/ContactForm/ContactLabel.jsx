const LabelField = (props) => {
    
    return (
        <>
            <label for={props.for} className={`${props.className}`} id={props.id}> {props.children} </label>        
        </>
    )
}

export default LabelField;


