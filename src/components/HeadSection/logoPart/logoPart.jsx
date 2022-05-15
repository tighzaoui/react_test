import { Container, Icon, Title } from "./logoPart.style";
import StarLogomark from "../icons/starLogomark";
function LogoPart() {
  return (
    <Container>
      <Icon>
        <StarLogomark width="60" height="60" color="white" />
      </Icon>
      <Title>Casbah</Title>
    </Container>
  );
}

export default LogoPart;
