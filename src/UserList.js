import React from "react";

export default function UserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid='users'>
        {users &&
          users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
