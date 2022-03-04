interface IHeader{
    children?: React.ReactChild;
    className?: string;
}

const Header: React.FC<IHeader> = (props) => {
  const { children } = props
  return <header {...props}>{children}</header>
}
export default Header;

