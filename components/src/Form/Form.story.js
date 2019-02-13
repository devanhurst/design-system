import React from "react";
import { storiesOf } from "@storybook/react";
import Field from "../Field/Field";
import Input from "../Input/Input";
import Form from "./Form";
import FormSection from "./FormSection";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import RadioGroup from "../Radio/RadioGroup";
import ToggleWithText from "../Toggle/Toggle";
import InlineValidation from "../Validation/InlineValidation";
import HeaderValidation from "../Validation/HeaderValidation";
import List from "../List/List";
import ListItem from "../List/ListItem";
import Select from "../Select/Select";


const options = [
  { value: "planned", label: "Planned" },
  { value: "booked", label: "Booked" },
];

storiesOf("Form", module)
  .add("Form", () => (
    <Form title="New Profile">
      <Field labelText="Name" htmlFor="name">
        <Input id="name"/>
      </Field>
      <Field
        labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below"
        htmlFor="dateofbirth" formatText="(DD-MM-YYYY)"
      >
        <Input id="dateofbirth" />
      </Field>
      <Field
        labelText="Place of birth" requirementText="(Optional)" htmlFor="placeofbirth"
      >
        <Input id="placeofbirth"/>
      </Field>
    </Form>
  ))
  .add("Without title", () => (
    <Form>
      <Field labelText="Name">
        <Input />
      </Field>
      <Field
        labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below"
        formatText="(DD-MM-YYYY)"
      >
        <Input />
      </Field>
      <Field labelText="Place of birth" requirementText="(Optional)">
        <Input />
      </Field>
    </Form>
  ))
  .add("With form sections", () => (
    <Form title="New Profile">
      <FormSection title="Personal Information">
        <Field labelText="Name">
          <Input />
        </Field>
        <Field
          labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below"
          formatText="(DD-MM-YYYY)"
        >
          <Input />
        </Field>
        <Field labelText="Place of birth" requirementText="(Optional)">
          <Input />
        </Field>
      </FormSection>
      <FormSection title="General Information">
        <Field labelText="Gender">
          <Input />
        </Field>
        <Field labelText="Ocupation">
          <Input />
        </Field>
      </FormSection>
    </Form>
  ))
  .add("With form sections without titles", () => (
    <Form title="New Profile">
      <FormSection>
        <Field labelText="Name">
          <Input />
        </Field>
        <Field
          labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below"
          formatText="(DD-MM-YYYY)"
        >
          <Input />
        </Field>
        <Field labelText="Place of birth" requirementText="(Optional)">
          <Input />
        </Field>
      </FormSection>
      <FormSection>
        <Field labelText="Gender">
          <Input />
        </Field>
        <Field labelText="Ocupation">
          <Input />
        </Field>
      </FormSection>
    </Form>
  ))
  .add("Demo form", () => (
    <>
      <Form title="Job 324400">
        <HeaderValidation message="Instructions and description of an error" title="Error has occured ...">
          <List compact>
            <ListItem>Affected field</ListItem>
            <ListItem>Unmet criteria</ListItem>
            <ListItem><a href="https://nulogy.design/">Affected field</a></ListItem>
          </List>
        </HeaderValidation>
        <FormSection title="Job Information">
          <Field labelText="Project" htmlFor="project">
            <Input placeholder="Project 128703" id="project" />
          </Field>
          <Field
            labelText="Project description" requirementText="(Optional)"
            helpText="Project description helps identify the project." htmlFor="project-description"
          >
            <Input id="project-description" />
          </Field>
          <Field labelText="Project status" htmlFor="project-status-input">
            <Select options={ options } id="project-status" />
          </Field>
          <Field labelText="Item code" htmlFor="item-code">
            <Input error defaultValue="WS2SB6" id="item-code" />
            <InlineValidation message="Item WS2SB6 does not exist." />
          </Field>
          <Field labelText="Eaches expected on Job" htmlFor="eaches-expected">
            <Input placeholder="2 000" id="eaches-expected" />
          </Field>
          <Field labelText="Eaches remaining on Project" htmlFor="eaches-remaining">
            <Input defaultValue="18 000" disabled id="eaches-remaining"/>
          </Field>
          <Field labelText="Scheduled start" formatText="(Expected format: MMM DD, YYYY)" htmlFor="scheduled-start">
            <Input placeholder="May 26, 2019" id="scheduled-start"/>
          </Field>
          <Field labelText="Scheduled end" formatText="(Expected format: MMM DD, YYYY)" htmlFor="scheduled-end">
            <Input disabled defaultValue="June 29, 2019" id="scheduled-end" />
          </Field>

          <Field labelText="Line Lead" requirementText="(Optional)">
            <Checkbox labelText="Christiaan Oostenbrug" />
            <Checkbox labelText="Matt Dunn" />
            <Checkbox disabled checked labelText="Clemens Park" />
            <Checkbox disabled labelText="Nikola Pejcic" />
          </Field>

          <Field labelText="Reconcile">
            <RadioGroup name="settingSelection" defaultValue="yes" id="reconcile">
              <Radio value="yes" labelText="Yes" />
              <Radio value="no" labelText="No" />
              <Radio value="maybe" labelText="Maybe" disabled />
            </RadioGroup>
            <InlineValidation message="Yes can be only selected ..." />
          </Field>
          <Field labelText="Job visibility">
            <ToggleWithText
              onText="Visible" offText="Hidden"
            />
          </Field>
        </FormSection>
        <FormSection title="Rejects">
          <Field labelText="Item" htmlFor="rejects">
            <Input error defaultValue="235432" id="rejects" />
            <InlineValidation message="Item 235432 is not a valid entry.">
              <List compact>
                <ListItem>Item is at least 8 characters long.</ListItem>
                <ListItem>Item contains at least 1 letter.</ListItem>
              </List>
            </InlineValidation>
          </Field>
          <Field labelText="Quantity" htmlFor="quantity">
            <Input id="quantity"/>
          </Field>

          <Field labelText="Reject visibility">
            <ToggleWithText
              onText="Visible" offText="Hidden" disabled
            />
          </Field>
        </FormSection>
      </Form>
    </>
  ));
