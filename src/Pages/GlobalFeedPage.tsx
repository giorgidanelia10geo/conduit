import React from 'react'

import { url } from '../api'
import FeedToggler from '../components/FeedTogglerComponent/FeedTogglerComponent'
import Banner from '../shared/Banner/Banner'
import Feed from '../shared/Feed/Feed'
import PopularTags from '../shared/PopularTags/PopularTags'

interface IFeedTogglerProps {
  tag: string
}

const GlobalFeedPage: React.FC<IFeedTogglerProps> = ({tag}) => {
  const [fullUrl] = React.useState<string>(url)

  return (
    <>
      <div className="home-page">
        <Banner />
        <div className="container page"> 
          <div className="row">
            <div className="col-md-9">
              <FeedToggler tag={tag} />
              <Feed fullUrl={fullUrl} />
            </div>
            <div className="col-md-3">
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GlobalFeedPage
