function TodoForm(){

    return(
      <form>
       <label htmlFor="TodoTitle">Todo </label> 
       <input type="text" id="TodoTitle" />
       <button type ="submit" disabled>Add Todo</button>
      </form>
    );
}

export default TodoForm;