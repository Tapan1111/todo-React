

export default function TodoComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+2, today.getMonth(), today.getDay()); 
    const todos = [
      {id:1,description:'Learn Java',done:false,targetDate:targetDate},
      {id:2,description:'Learn AWS',done:false,targetDate:targetDate},
      {id:3,description:'Learn Javascript',done:false,targetDate:targetDate},
      {id:4,description:'Learn Docker',done:false,targetDate:targetDate},
      {id:5,description:'Learn React',done:false,targetDate:targetDate}
    ];
    return(
      <div className='Container'>
      <h1>Lets Work in Todo</h1>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Is Done</td>
              <td>TargetDate</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(
                todo => (
                  <tr key={todo.id}>
                     <td>{todo.id}</td>
                     <td>{todo.description}</td>
                     <td>{todo.done.toString()}</td>
                     <td>{todo.targetDate.toDateString()}</td>
                  </tr>
  
                )
              )
  
            }
            
          </tbody>
        </table>
      </div>
      </div>
    )
  
  }