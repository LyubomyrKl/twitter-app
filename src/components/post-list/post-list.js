import React from 'react';
import PostListItem from '../post-list-item/post-list-item'
import './post-list.css';


const PostList = ({posts, onDelete, onToggleLike,onToggleImportant}) =>{

  const elements = posts.map((item)=>{
    const {id, ...itemProps} = item;
      return (
        <li className="list-group-item"
        key = {id}>
              <PostListItem 
              
              onToggleImportant = {()=>{onToggleImportant(id)}}
              onToggleLike = {()=>{onToggleLike(id)}}
              onDelete = {()=>{onDelete(id)}}
              label={itemProps.label} 
              important = {itemProps.important}
              like = {itemProps.like}/>  
        </li>
      )
  })
  return (
      <ul className="app-list list-group">
          {elements}
      </ul>
  )
};

export default PostList;