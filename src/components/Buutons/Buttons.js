const Buttons = (props) => {
    return (
        <div>
            <buttons onClick={props.onClick} type="submit" >{props.name}</buttons>
        </div>
    )
}
export default Buttons