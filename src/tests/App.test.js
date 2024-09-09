import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../App";

test("can receive a new user and show it in a list", async () => {
    render(<App />);
  
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");
  
    user.click(nameInput);
    user.keyboard("milas");
    user.click(emailInput);
    user.keyboard("salim@milas.com");
    user.click(button);
  
    await waitFor(() => {
      const name = screen.getByText("milas");
      const email = screen.getByText("salim@milas.com");
  
      expect(name).toBeInTheDocument();
      // eslint-disable-next-line
      expect(email).toBeInTheDocument();
    });
  });
  