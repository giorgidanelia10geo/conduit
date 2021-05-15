import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTag } from '../../redux/tags/actions'
import Loader from '../Loader/Loader'
import { IRootState } from '../types/rootState.interface'

const PopularTags: React.FC = () => {
  const ispopularTags = useSelector((state: IRootState) => state.tags.data?.tags)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!ispopularTags) {
      dispatch(getTag())
    }
  }, [dispatch, ispopularTags])

  return (
    <div>
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          { 
            !ispopularTags ? <Loader /> : (ispopularTags.map((tag, idx) => {
              return <Link
                to={`/tag/${tag}`}
                className="tag-default tag-pill"
                key={idx}
                onClick={(tag) => tag}
              >
                {tag}
              </Link>
            }))
          }
        </div>
      </div>
    </div>
  ) 
}

export default PopularTags
