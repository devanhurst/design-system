import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { display } from "styled-system";
import { Text, SubsectionTitle } from "../Type";
import SubMenuLink from "./SubMenuLink";
import MenuLink from "./MenuLink";
import theme from "../theme";

const BrandingText = styled.div({
  fontSize: theme.fontSizes.small,
  lineHeight: theme.lineHeights.smallTextCompressed,
  fontStyle: "italic",
  letterSpacing: "0.02em",
  color: theme.colors.whiteGrey,
  paddingTop: theme.space.half,
  marginBottom: theme.space.x4,
  marginLeft: theme.space.x3
});

const ApplyMenuLinkStyles = styled.li({
  display: "block",
  marginBottom: theme.space.x1,
  "*": {
    display: "block",
    color: theme.colors.white,
    fontSize: theme.fontSizes.large,
    lineHeight: theme.lineHeights.subsectionTitle,
    padding: `${theme.space.x1} ${theme.space.x3} ${theme.space.x1} ${theme.space.x3}`,
    borderRadius: "0",
    textDecoration: "none",
    "&:hover, &:focus": {
      outline: "none",
      backgroundColor: theme.colors.black
    },
    "&:disabled": {
      opacity: ".5"
    }
  }
});

const MobileMenuLink = styled(MenuLink)({
  fontSize: theme.fontSizes.large,
  lineHeight: theme.lineHeights.subsectionTitle,
  width: "100%",
  padding: `${theme.space.x1} ${theme.space.x3} ${theme.space.x1} ${theme.space.x3}`,
  borderRadius: "0"
});

const getPaddingLeft = layer => `${24 * layer + 24}px`;

const ApplySubMenuLinkStyles = styled.li(({ layer }) => ({
  marginBottom: theme.space.x1,
  color: theme.colors.black,
  textDecoration: "none",
  lineHeight: theme.lineHeights.base,
  transition: ".2s",
  fontSize: theme.fontSizes.medium,
  "*": {
    display: "block",
    color: theme.colors.white,
    textDecoration: "none",
    padding: `${theme.space.x1} ${theme.space.x2}`,
    paddingLeft: getPaddingLeft(layer),
    "&:hover, &:focus": {
      outline: "none",
      backgroundColor: theme.colors.black
    },
    "&:disabled": {
      opacity: ".5"
    }
  }
}));

const MobileSubMenuLink = styled(SubMenuLink).attrs({
  hoverColor: theme.colors.white,
  bgHoverColor: theme.colors.black
})(({ layer }) => ({
  maxWidth: "100%",
  paddingLeft: getPaddingLeft(layer),
  a: {
    marginBottom: theme.space.x1
  }
}));

const SubMenuItemsList = styled.ul({
  listStyle: "none",
  paddingLeft: "0",
  margin: "0"
});

const renderMenuLink = (menuItem, linkOnClick) => (
  <li key={menuItem.name} style={{ display: "block", marginBottom: theme.space.x1 }}>
    <MobileMenuLink onClick={linkOnClick} href={menuItem.href}>
      {menuItem.name}
    </MobileMenuLink>
  </li>
);

const renderSubMenuLink = (menuItem, linkOnClick, layer) => (
  <li key={menuItem.name} style={{ display: "block", marginBottom: theme.space.x1 }}>
    <MobileSubMenuLink
      onClick={linkOnClick}
      href={menuItem.href}
      layer={layer}
      color={theme.colors.white}
      hover={theme.colors.white}
      bgHoverColor={theme.colors.black}
    >
      {menuItem.name}
    </MobileSubMenuLink>
  </li>
);

const renderCustom = (menuItem, linkOnClick, layer) => {
  const WrapCustom = layer === 0 ? ApplyMenuLinkStyles : ApplySubMenuLinkStyles;
  return (
    <WrapCustom key={menuItem.name} layer={layer} onClick={linkOnClick}>
      {menuItem.render()}
    </WrapCustom>
  );
};

const renderSubMenu = (menuItem, linkOnClick, layer) => (
  <li key={menuItem.name} style={{ display: "block" }}>
    <SubMenu menuItem={menuItem} layer={layer} linkOnClick={linkOnClick} />
  </li>
);

const getRenderFunction = (menuItem, layer) => {
  if (menuItem.items) {
    return renderSubMenu;
  } else if (menuItem.render) {
    return renderCustom;
  } else if (layer === 0) {
    return renderMenuLink;
  } else {
    return renderSubMenuLink;
  }
};

const renderMenuItems = (menuItems, linkOnClick, layer) =>
  menuItems.map(menuItem => {
    const render = getRenderFunction(menuItem, layer);
    return render(menuItem, linkOnClick, layer);
  });

const renderTopLayerMenuItems = (menuData, linkOnClick) => renderMenuItems(menuData, linkOnClick, 0);

const SubMenu = ({ menuItem, linkOnClick, layer }) => (
  <>
    {layer === 0 && (
      <SubsectionTitle mb={theme.space.x1} color="grey" key={menuItem.name}>
        {menuItem.name}
      </SubsectionTitle>
    )}
    {layer > 0 && (
      <Text
        mb={theme.space.x1}
        color="grey"
        py={theme.space.x1}
        style={{ paddingLeft: `${24 * layer + 24}px` }}
        key={menuItem.name}
      >
        {menuItem.name}
      </Text>
    )}
    <SubMenuItemsList>{renderMenuItems(menuItem.items, linkOnClick, layer + 1)}</SubMenuItemsList>
  </>
);

SubMenu.propTypes = {
  layer: PropTypes.number.isRequired,
  menuItem: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  linkOnClick: PropTypes.func
};

SubMenu.defaultProps = {
  linkOnClick: null
};

const Menu = styled.ul(() => ({
  margin: "0",
  padding: `${theme.space.x1} 0`,
  zIndex: "10",
  width: "100%",
  color: theme.colors.white,
  [`${SubsectionTitle}`]: {
    padding: `${theme.space.x1} 0 ${theme.space.x1} ${theme.space.x3}`
  }
}));

const Nav = styled.nav({
  minHeight: "calc(100vh - 72px)",
  backgroundColor: theme.colors.blackBlue
});

const BaseMobileMenu = ({ menuData, closeMenu, logoSubtext, ...props }) => (
  <Nav {...props}>
    {logoSubtext && <BrandingText>{logoSubtext}</BrandingText>}
    <Menu>
      {menuData.primaryMenu && renderTopLayerMenuItems(menuData.primaryMenu, closeMenu)}
      {menuData.secondaryMenu && renderTopLayerMenuItems(menuData.secondaryMenu, closeMenu)}
    </Menu>
  </Nav>
);

BaseMobileMenu.propTypes = {
  menuData: PropTypes.shape({
    primaryMenu: PropTypes.arrayOf(PropTypes.shape({})),
    secondaryMenu: PropTypes.arrayOf(PropTypes.shape({}))
  }),
  logoSubtext: PropTypes.string,
  closeMenu: PropTypes.func
};

BaseMobileMenu.defaultProps = {
  menuData: null,
  logoSubtext: null,
  closeMenu: () => {}
};

const MobileMenu = styled(BaseMobileMenu)(display);

export default MobileMenu;
