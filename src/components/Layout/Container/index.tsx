const Container:React.FC<any> = (props) => {
    const { children} = props;
    return (
        // eslint-disable-next-line jsx-a11y/aria-role
        <div className={`${props.className}`} role="container">
            {children}
        </div>
    )
}
export default Container;
