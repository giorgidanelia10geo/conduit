import React from 'react'
import { useSelector } from 'react-redux'

import { url } from '../api'
import FeedToggler from '../components/FeedTogglerComponent/FeedTogglerComponent'
import YourFeedComponent from '../components/YourFeedComponent/YourFeedComponent'
import Banner from '../shared/Banner/Banner'
import PopularTags from '../shared/PopularTags/PopularTags'
import { IRootState } from '../shared/types/rootState.interface'

interface IYourFeedPageProps {
  tag: string
}

const YourFeedPage: React.FC<IYourFeedPageProps> = ({tag}) => {
  const isArticle = useSelector((state: IRootState) => state.feed.data?.articles)
  const [fullUrl] = React.useState<string>(`${url}/feed`)

  return (
     <>
      <div className="home-page">
        <Banner />
        <div className="container page"> 
          <div className="row">
            <div className="col-md-9">
              <FeedToggler tag={tag} />
              {
                isArticle?.length === 0
                ? <div>No articles are here... yet.</div>
                : <YourFeedComponent fullUrl={fullUrl} />
              }
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

export default YourFeedPage
