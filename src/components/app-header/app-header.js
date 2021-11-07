import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) =>{
    return (
        <div className="app-header d-flex">
            <h1>Lyubomyr Klymhyuk</h1>
            <h2>{allPosts} записей из них {liked} понравилось</h2>
        </div>
    )
};

export default AppHeader;