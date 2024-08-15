import { Avatar, Flex } from "@mantine/core";
import avatar from "../../assets/avatar.jpg";
import {
  IconAlignBoxBottomLeftFilled,
  IconSettings,
} from "@tabler/icons-react";

export const NavbarComponent = () => {
  return (
    <Flex h="100%" direction="column" justify="space-between" align="center">
      <IconAlignBoxBottomLeftFilled color="#1c7ed6" size={40} />
      <Flex direction="column" align="center" gap="xs">
        <IconSettings size={30} color="#868e96" />
        <Avatar radius="xl" src={avatar} alt="it's me" />
      </Flex>
    </Flex>
  );
};
