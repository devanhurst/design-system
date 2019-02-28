import React from "react";
import { storiesOf } from "@storybook/react";
import { Flex, Button } from "ComponentsRoot";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";

storiesOf("MenuItem", module)
  .add("MenuItem", () => (
    <Flex bg="blackBlue" justifyContent="center" alignItems="center" height="50px">
      <MenuItem
        id="menuItem1"
        labelText="Menu Item"
      >
        <SubMenuItem href="/" subText="details"> Submenu Item 1 </SubMenuItem>
        <SubMenuItem href="/" subText="details"> Submenu Item 2 </SubMenuItem>
        <SubMenuItem href="/" subText="details"> Submenu Item 3 </SubMenuItem>
      </MenuItem>
    </Flex>
  ));
