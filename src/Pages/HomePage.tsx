import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '../shared/types/rootState.interface'
import GlobalFeedPage from './GlobalFeedPage'

interface IHomeProps {
  tag:string
}

const HomePage: React.FC<IHomeProps> = ({tag}) => {
  const isLoggedIn = useSelector((state: IRootState) => state.user.isLoggedIn)
  
  return (
    <div>
      {
        !isLoggedIn ? (
          <GlobalFeedPage tag={tag} />
        ) : (
          <GlobalFeedPage tag={tag} />
        )
      }
    </div>
  )
}

export default HomePage
