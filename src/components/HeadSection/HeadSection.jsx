import LogoPart from "./logoPart";
import SearchBox from "./searchBox";
import NotificationPart from "./notificationPart";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  LefetContainer,
  NavbarLinkContainer,
  NavbarLink,
} from "./headSection.style.js";

const pages = [
  { url: "/", title: "Home" },
  { url: "/shop", title: "Shop" },
  { url: "/contact", title: "Contact" },
  { url: "/about", title: "About" },
];

function HeadSection() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <LefetContainer>
        <LogoPart />
      </LefetContainer>
      <NavbarLinkContainer>
        {pages.map((p, i) => (
          <NavbarLink
            key={i}
            active={location.pathname === p.url}
            onClick={() => {
              navigate(p.url);
            }}
          >
            {p.title}
          </NavbarLink>
        ))}
      </NavbarLinkContainer>
      <SearchBox />
      <NotificationPart />
    </Container>
  );
}
export default HeadSection;
