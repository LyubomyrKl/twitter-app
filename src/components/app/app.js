import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';


export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
           data : [
                {label: "Going to learn React", important: true, like:true, id:1},
                {label: "That`s so good", important: false, like:false, id:2},
                {label: "I nead a brake", important: false, like:false, id:3}
            ]
            
        };
        this.maxId = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike= this.onToggleLike.bind(this)
    }
     
    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem=> elem.id === id );
            const newArr = [...data.slice(0, index), ...data.slice(index+1)]
            return{
                data: newArr
            }                                                               
        });
    }

    addItem(text){
        const newItem = {
            label: text,
            important: false,
            id:Date.now() 
        }

        fetch('https://liubomyr-todo-api.herokuapp.com/api/message',{
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
       
        
        

        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return {
                data: newArr    
            }                                                              
        });
    }

    onToggleImportant(id){
       
    }

    onToggleLike(id){
        
    }

    render(){
        const liked = this.state.data.filter( item => item.like).length,
              allPosts = this.state.data.length;  
        
     return(
         <div className='app'> 
             <AppHeader
             liked = {liked}
             allPosts = {allPosts}/>
            <div className="search-panel d-flex">
              <SearchPanel/>
              <PostStatusFilter/>
            </div>
            <PostList 
            onDelete={this.deleteItem}  
            onToggleImportant ={this.onToggleImportant}
            onToggleLike = {this.onToggleLike}
            posts = {this.state.data} />
            <PostAddForm 
            onAdd={this.addItem}/>
         </div>
     )
    }
 }