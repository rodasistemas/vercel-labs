import { NavLink } from 'react-router-dom'


interface Ilink {
  url: string
  name: string
}
export interface INavs {
  links: Ilink[]
}
const Navlink: React.FC<INavs> = (props) => {
  return (
    <>
      <nav>
        {props.links.map((link) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              }
            }}
            to={link.url}
            key={link.name}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

    </>
  )
}

export default Navlink
