import { useState } from "react";
import "./App.css";
import UserList from "./UserList";
import UserForm from "./UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = ( user ) => {
    setUsers([...users, user]);
  }
  return (
    <div className="container">
      <h4>Testing App</h4>
      <hr />
      <UserForm onUserAdd={onUserAdd} />
      <hr/>
      <UserList users={users} />
    </div>
  );
}

export default App;