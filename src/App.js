import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './Todolist';

class App extends Component {

  //ใส่ค่า state ที่เป็น อ๊อบเจ็กต์ json ใส่ {}
  constructor(props){
    super(props)
    this.state = {
      todoItems: [], //เมธอด push() จะเพิ่ม array เข้าไปทีล่ะตัวตามหลังไปเรื่อยๆ
      todoItems2: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.addTodo2 = this.addTodo2.bind(this)
  }

  //ฟงก์ชั่น add todo เมื่อเวลามีการกดปุ่มเราจะ set state ใหม่ให้มัน
  addTodo(newTodo){ //ในฟังก์ชั่นเรียก this เราต้อง bind ฟังก์ชั่น เพื่อผูก this เข้ากับ function
   this.setState({
    todoItems: this.state.todoItems.concat([newTodo]) //concat รับพารามิเตอร์ [array] (เมธอด push ใช้ไม่มี)
   })
  }

  addTodo2(newTodo){
    this.setState({
     todoItems2: this.state.todoItems2.concat([newTodo]) 
    })
   }
   
  render(){
    let {todoItems,todoItems2} = this.state
    return (
      <div>
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList items={todoItems}/>

        <TodoInput onAddTodo={this.addTodo2}/>
        <TodoList items={todoItems2}/>
      </div>
    );
  }
}

export default App;