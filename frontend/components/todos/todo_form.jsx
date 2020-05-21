import React from 'react'
import {uniqueId} from '../../util/util'

export default class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    /////THIS DOES NOT WORK//////
    handleClick(e){
        e.preventDefault();
        const newTodo = {
            title: e.currentTarget.title,
            body: e.currentTarget.body,
            done: e.currentTarget.done,
            id: uniqueId(),
        };
    }
    //////////////////////////////

    render(){
        return(
            <form>
                <label>Title
                    <input type="text"/>
                </label>
                <br/>
                <label>Body
                    <textarea></textarea>
                </label>
                <br/>
                <label>Tags
                    <input type="text"/>
                </label>
                <br/>
                <input type="submit" onClick={this.handleClick} value="create"/>
            </form>
        )
    }
}