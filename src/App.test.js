import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("testing mounting", () => {
  it("mounting Welcome Component", () => {
    render(<App />);
    const h1 = screen.getByText(/benvenuti in epiBooks/i);
    expect(h1).toBeInTheDocument();
  });

  // it("mounting Comment area", async () => {
  //   render(<App />);
  //   await waitFor(() => {
  //     const input = screen.getByRole("input");

  //     expect(input).toBeInTheDocument();
  //   });
  //   // const list = screen.getByRole("li");
  //   // expect(list).not.toBeInTheDocument();
  // });

  // it("card", async () => {
  //   render(<App />);
  //   await waitFor(() => {
  //     // const allCards = screen.queryAllByTestId("card-item");
  //     // expect(allCards).toBeInTheDocument();
  //     const img = screen.queryAllByRole("img");
  //     expect(img).toHaveLength(0);
  //   });
  // });
});

describe("testfetch", () => {
  it("comment area", async () => {
    render(<App />);

    const img = await screen.findAllByRole("img");
    expect(img).toBeInTheDocument();
  });
});
