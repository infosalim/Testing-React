import React, { useState } from "react";

export default function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const buttonHandler = (e) => {
    e.preventDefault();

    onUserAdd({name: name, email: email});
  }

  return (
    <form className="add-form">
      <div className="input-box">
        <label htmlFor="name">Name</label>
        <input id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="type name ..." />
      </div>
      <div className="input-box">
        <label htmlFor="email">Email</label>
        <input id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type email ..." />
      </div>
      <button onClick={buttonHandler} className="button">Add User</button>
    </form>
  );
}
