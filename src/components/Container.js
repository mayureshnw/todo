import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addTodo, removeTodo, toggleTodo} from '../actions/todoAction'
import './Container.css';
import Item from './Item'

class Container extends Component {

  constructor(props) {
    super(props);
    // this.messages = ['123','hey there', 'bye', 'hello']
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      input: ''
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleToggle(id) {
    this.props.toggleTodo(id)
  }

  submitMessage() {
    this.props.addTodo(this.state.input)
    this.setState({
      input: ''
    });
  }
    
  render() {
    return <div className="Container">
      <input className="Input" onChange={this.handleChange} value={this.state.input}/>
      <button className="Input" onClick={this.submitMessage}>Submit</button>
      <ul>
      {
        this.props.todos.map((todo,i) => {
          return <Item key={todo.id} onClick={() => this.handleToggle(todo.id)} text={todo.payload} completed={todo.completed}></Item>
        })
      }
      </ul>
    </div>
  }
}

const mapStateToProps = state => {
  return {
   todos: state.todos
 }}

 const mapDispatchToProps = dispatch => ({
  addTodo: (message) => dispatch(addTodo(message)),
  removeTodo: (index) => dispatch(removeTodo(index)),
  toggleTodo: (id) => dispatch(toggleTodo(id))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Container);