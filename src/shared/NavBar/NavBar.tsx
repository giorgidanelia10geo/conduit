import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IRootState } from '../types/rootState.interface'

const Header: React.FC = () => {
  const currentUser = useSelector(({ user }: IRootState) => user.currentUser)
  
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">conduit</Link>
          {
            !currentUser ? (
              <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Sign up</Link>
                </li>
              </ul>) : (
              <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/article" className="nav-link">
                  <i className="ion-compose"></i>&nbsp;New Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/settings" className="nav-link">
                    <i className="ion-gear-a"></i>&nbsp;Settings
                  </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profiles" className="nav-link">
                      <img src={currentUser.image} className="user-pic" alt={currentUser.image} />
                    {currentUser.username}
                  </Link>
                </li>
              </ul>
            )
          }
        </div>
      </nav>  
   </div>
  )
}

export default Header