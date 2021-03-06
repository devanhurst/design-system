import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Slider = styled.span(({ disabled, theme }) => ({
  position: "absolute",
  height: theme.space.x3,
  width: theme.space.x6,
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: disabled ? theme.colors.grey : theme.colors.darkGrey,
  borderRadius: "12px",
  transition: ".2s ease",
  cursor: disabled ? null : "pointer",
  "&:before": {
    content: "''",
    position: "absolute",
    height: "22px",
    width: "22px",
    left: "1px",
    top: "1px",
    borderRadius: theme.radii.circle,
    boxSizing: "border-box",
    backgroundColor: disabled ? theme.colors.whiteGrey : theme.colors.white,
    transition: ".2s ease"
  }
}));

const Switch = styled.div(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
  minWidth: theme.space.x6,
  minHeight: theme.space.x3,
  input: {
    opacity: "0",
    width: "1px",
    height: "1px"
  }
}));

const ToggleInput = styled.input(({ disabled, theme }) => ({
  [`&:checked + ${Slider}:before`]: {
    transform: "translateX(24px)"
  },
  [`&:checked + ${Slider}`]: {
    backgroundColor: disabled ? theme.colors.grey : theme.colors.darkBlue
  },
  [`&:focus + ${Slider}:before`]: {
    boxShadow: disabled ? null : theme.shadows.focus
  }
}));

const ToggleButton = React.forwardRef((props, ref) => {
  const { disabled, defaultToggled } = props;
  return (
    <Switch>
      <ToggleInput ref={ref} type="checkbox" defaultChecked={defaultToggled} {...props} />
      <Slider disabled={disabled} />
    </Switch>
  );
});

ToggleButton.propTypes = {
  defaultToggled: PropTypes.bool,
  disabled: PropTypes.bool
};

ToggleButton.defaultProps = {
  defaultToggled: undefined,
  disabled: false
};

export default ToggleButton;
