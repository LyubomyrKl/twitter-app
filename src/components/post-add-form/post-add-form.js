import React from 'react';
import './post-add-form.css'

export default class PostAddForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({text: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }
 
    render() {
        return(
            <form className="bottom-panel d-flex">
                <input
                 type="text"
                 placeholder="O чем вы думаете сейчас?"
                 className="form-control new-post-label"
                 onChange={this.onChange}
                 value={this.state.text}
                 />
                 <button
                 onClick = {this.onSubmit} 
                 type="submit"
                 className='btn btn-outline-secondary'> 
                 Добавить</button>
            </form>
        )
    }
};
