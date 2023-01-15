import React from "react";
import { render } from "@testing-library/react";
import Agenda from "../components/Agenda";

describe("Agenda", () => {
  it("should render Agenda component correctly", () => {
    const { container } = render(<Agenda />);
    expect(container).toMatchSnapshot();
  });
});
