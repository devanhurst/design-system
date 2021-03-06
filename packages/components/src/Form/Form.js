import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import propTypes from "@styled-system/prop-types";
import PropTypes from "prop-types";
import { Heading2 } from "../Type";
import Field from "./Field";
import { Alert } from "../Alert";
import Fieldset from "./Fieldset";
import FormSection from "./FormSection";

const BaseForm = ({ title, children, ...props }) => (
  <form {...props}>
    {title && <Heading2>{title}</Heading2>}
    {children}
  </form>
);

const Form = styled(BaseForm)(space, ({ title, theme }) => ({
  width: "100%",
  [`${Heading2}`]: {
    marginBottom: title ? theme.space.x6 : 0
  },
  [`${Alert}`]: {
    marginBottom: theme.space.x6
  },
  [`${Field},${Fieldset}`]: {
    marginBottom: theme.space.x3,
    "&:last-child": {
      marginBottom: 0
    }
  },
  [`${FormSection}`]: {
    marginBottom: theme.space.x6,
    "&:last-child": {
      marginBottom: 0
    }
  }
}));

BaseForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  ...propTypes.space
};

BaseForm.defaultProps = {
  children: [],
  title: null
};

export default Form;
