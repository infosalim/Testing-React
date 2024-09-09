import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../UserForm";

test("it shows two input and a button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find and element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the for is submitted", () => {
  const mock = jest.fn();

  // Try to render component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard("salim");

  // Simulate typing in an emaill
  user.click(emailInput);
  user.keyboard("salim@gmail.com");

  // Find the Button
  const button = screen.getByRole("button");

  // Simulate chlicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ name: "salim", email: "salim@gmail.com" });

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "salim",
    email: "salim@gmail.com",
  });
});
