import React from 'react'

const List = (props) => {
    const {list} = props
  return (
    list.map(item => (
        <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    ))
  )
}

export default List