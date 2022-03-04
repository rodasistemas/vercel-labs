const Container:React.FC<any> = (props) => {
    const { children} = props;
    return (
        <div className={`${props.className}`} role="container">
            {children}
        </div>
    )
}
export default Container;
