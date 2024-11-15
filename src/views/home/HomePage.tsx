import { Home } from '../../components'
import { NavbarComponent } from '../../components'

import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home-page">
        <NavbarComponent />
        <Home />
    </div>
  )
}
