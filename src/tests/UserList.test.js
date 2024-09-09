import { render, screen, within } from "@testing-library/react";
import UserList from "../UserList";

function renderComponent() {
  const users = [
    { name: "Salim", email: "salim@mail.com" },
    { name: "Jen", email: "jen@email.com" },
  ];

  return {
    users,
  };
}

test("render one row per user", () => {
  // Render the component
  const { users } = renderComponent();
  //   render(<UserList users={users} />);
  const { container } = render(<UserList users={users} />);

  // Find all the rows in the table
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // Render the component
  const { users } = renderComponent();

  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole("cell", {
      name: user.name,
    });
    const email = screen.getByRole("cell", {
      name: user.email,
    });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
