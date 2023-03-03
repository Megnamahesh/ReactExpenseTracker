import './wrapper.css'
const Wrapper = (props) => {
    console.log(props.className,'classname')
    const classes = `cards + ${props.className}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Wrapper