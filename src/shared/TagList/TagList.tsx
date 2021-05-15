import React from 'react'
import {TagListType} from '../types/TagListType'

interface ITagList {
  tags: TagListType[]
}

const TagList: React.FC<ITagList> = ({tags}) => {

  return (
    <ul className="tag-list">
      {
        tags.map((tag, idx) =>
          <li
            key={idx}
            className="tag-default tag-pill tag-outline"
          >
            {tag}
          </li>
        )
     }
    </ul>
  )
}

export default TagList
