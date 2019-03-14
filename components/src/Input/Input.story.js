import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "ComponentsRoot";

storiesOf("Input", module)
  .add("Input", () => (
    <Input labelText="Input" />
  ))
  .add("Set to disabled", () => (
    <Input name="disabled" disabled />
  ))
  .add("Set to error", () => (
    <Input name="error" error />
  ))
  .add("Set to required", () => (
    <Input name="required" required />
  ));
