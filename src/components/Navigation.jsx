import React, { useState } from "react";
import { useContext } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import { MAIN_CONTEXT } from "../App";

function Navigation(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  //
  const { setState, state } = useContext(MAIN_CONTEXT);

  console.log(state);

  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          onClick={() => {
            setState(1);
          }}
          href="#"
          active={state == 1}
        >
          React + Vite
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          onClick={() => {
            setState(2);
          }}
          active={state == 2}
        >
          Vue
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Angular</NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Express
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navigation;
