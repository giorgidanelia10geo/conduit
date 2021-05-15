import React from 'react'

import FeedToggler from '../components/FeedTogglerComponent/FeedTogglerComponent'
import Banner from '../shared/Banner/Banner'
import PopularTags from '../shared/PopularTags/PopularTags'
import TagFeedComponent from '../components/TagFeedComponent/TagFeedComponent'
import { url } from '../api'

interface ITagFeedPageProps {
  slug: string
  tag: string
}

const TagFeedPage: React.FC<ITagFeedPageProps> = ({ slug, tag }) => {
  const [tagName] = React.useState<string>(slug)
  const [apiUrl, setApiUrl] = React.useState<string>(`/${url}?tag=${tagName}`)

  React.useEffect(() => {
    setApiUrl(apiUrl)
  }, [apiUrl])

  return (
    <>
      <div className="home-page">
        <Banner />
        <div className="container page"> 
          <div className="row">
            <div className="col-md-9">
              <FeedToggler tag={tag} />
              <TagFeedComponent apiUrl={apiUrl} />
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

export default TagFeedPage
