import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { parseUrl, stringify } from 'query-string'

import { getFeed } from '../../redux/feed/action'
import { range } from '../services/utils'
interface IPaginationProps {
  total: number 
  url: string
  limit: number
}

const Pagination: React.FC<IPaginationProps> = ({ total, limit, url }) => {
  const dispatch = useDispatch()
  const [pages, setPages] = React.useState<number[]>([])
  let [currentPage, setCurrentPage] = React.useState<number>(1)

  React.useEffect(() => {
    const pagesCount = Math.ceil(total / limit)
    setPages(range(1, pagesCount))
    const offset = currentPage * limit - limit
    const parsedUrl = parseUrl(url)
    const stringifiedParams = stringify({
      limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    dispatch(getFeed(apiUrlWithParams))
  }, [currentPage, dispatch, limit, total, url])
  
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page, idx) => (
          <li
            className={
              currentPage === page
                ? 'page-item active'
                : 'page-item'}
            key={idx}
            onClick={() => setCurrentPage(page)}
          >
            <Link to="/" className="page-link">{page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination



