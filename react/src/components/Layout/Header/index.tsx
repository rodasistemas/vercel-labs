const Header: React.FC<any> = (props) => {
  const { children } = props
  return <header {...props}>{children}</header>
}
export default Header;

