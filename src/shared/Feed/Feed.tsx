import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IRootState } from '../types/rootState.interface'
import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination'
import { limit } from '../../api'
import { Favorite } from '../../components/FavoriteComponent/FavoriteComponent'
import TagList from '../TagList/TagList'

interface IFeedProps {
  fullUrl: string
}

const Feed: React.FC<IFeedProps> = ({fullUrl}) => {
  const isArticle = useSelector((state: IRootState) => state.feed.data?.articles)
  const [totalCount] = React.useState<number>(500)

  return (
    <>
      {isArticle ? isArticle.map((article, idx) => (
        <div className="article-preview" key={idx}>
          <div className="article-meta">
            <Link to="/profile">
              <img src={article.author.image} alt={''} />
            </Link>
            <div className="info">
              <Link className="author" to={`/profile`}>
                {article.author.username}
              </Link>
              <span className="date">
                {(new Date(article.createdAt)).toDateString()}
              </span>
            </div>
            <div className="pull-xs-right">
             <Favorite />
            </div>
            <Link to="/articles" className="preview-link">
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <span>Read more...</span>
              <TagList
                tags={article.tagList}
              />
            </Link>
          </div>
        </div>
      )) : <Loader />}
      <Pagination
        total={totalCount}
        limit={limit}
        url={fullUrl}
      />
    </>
  )
}

export default Feed
