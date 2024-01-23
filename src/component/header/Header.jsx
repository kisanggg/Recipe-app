import React, { useEffect } from 'react'
import './header.css'
import { Link, useLocation } from 'react-router-dom'
import { isLoggedIn ,getUser} from '../../utils/firebaseUtils'
import { UserContext } from '../../App'



function Header(props) {
  const location = useLocation() 
  const currentPath = location.pathname
  const user=React.useContext(UserContext);
  const [currentLocation, setCurrentLocation] = React.useState(currentPath)

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location.pathname])

  const links = [
    { link: `/`, title: `Home` },
    { link: `/image`, title: `ImageGallery`},
    { link: `/recipes`, title: 'Recipes' },
    { link: `/login`, title: 'Login' },
  ]
  const getCurrentLinkStyle = (data) => {
    let condition = currentLocation === data.link
    return {
      background: condition ? `var(--main-color)` : '',
      color: condition ? `#fff` : '',
      boxShadow: condition
        ? 'box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'
        : '',
    }
  }
  return (
    <div className={`header-wrapper`}>
      <nav>
        <ul>
          {links.map((item) => (
            <li key={item.link}>
              <Link end={true} style={getCurrentLinkStyle(item)} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
          {isLoggedIn()?(
          <img width={40} height={40} src={user?.imageUrl}></img>
          ):(
            <Link to={`/login`}>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header;