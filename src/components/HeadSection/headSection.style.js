import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
`;

export const LefetContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled.a`
  color: #000;
  font-family: Roboto;
  font-weight: ${(p) => (p.active ? 900 : 400)};
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  padding: 33px 23px;
`;
