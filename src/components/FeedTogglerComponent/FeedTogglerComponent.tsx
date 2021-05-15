import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { IRootState } from '../../shared/types/rootState.interface'

interface IFeedTogglerProps {
  tag: string
}

const FeedToggler: React.FC<IFeedTogglerProps> = ({tag}) => {
  const isLoggedIn = useSelector((state: IRootState) => state.user.isLoggedIn)

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isLoggedIn ? (
           <div>
            <li className="nav-item">
              <NavLink
                exact
                to={'/feed'}
                className="nav-link"
              >
                Your Feed
              </NavLink>
            </li>
        
            <li className="nav-item">
              <NavLink
                exact
                to={'/'}
                className="nav-link"
              >
                Global Feed
              </NavLink>
            </li>
          </div>
        ) : (
          <li className="nav-item">
            <NavLink
              to={'/'}
              className="nav-link"
            >
              Global Feed
            </NavLink>
          </li>)}
        {
          tag && <li className="nav-item">
            <NavLink
              to={`/tag/${tag}`}
              className="nav-link"
            >
              {tag}
            </NavLink>
          </li>
        }
      </ul>
    </div>
  )
}

export default FeedToggler

