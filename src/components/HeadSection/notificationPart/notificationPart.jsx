import { Container, Icon } from "./notificationPart.style";
import BellIcon from "../icons/bell";
import UserIcon from "../icons/user";
import FavoriteIcon from "../icons/favorite";
function NotificationPart() {
  return (
    <Container>
      <Icon>
        <BellIcon width="16" height="20" color="black" />
      </Icon>
      <Icon>
        <UserIcon width="34" height="34" color="#929292" />
      </Icon>
      <Icon>
        <FavoriteIcon width="20" height="19" color="black" />
      </Icon>
    </Container>
  );
}

export default NotificationPart;
