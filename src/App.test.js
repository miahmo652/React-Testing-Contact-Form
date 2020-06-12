import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";

import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  
 
});


test("testing form", ()=>{
   render(<App />)
const firstname = screen.getByTestId('first-name');
const lastname = screen.getByTestId('last-name');
const email = screen.getByTestId('email-input');

fireEvent.change(firstname, {target: {value:"Mo"}})
fireEvent.change(lastname, {target: {value:"Mo"}})
fireEvent.change(email, {target: {value:"Mo"}})

const submit = screen.getByTestId('input-submit')

fireEvent.click(submit);
}) 
