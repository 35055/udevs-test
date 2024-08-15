import { ActionIcon, Avatar, Flex } from "@mantine/core";
import avatar from "../../assets/avatar.jpg";
import {
  IconAlignBoxBottomLeftFilled,
  IconSettings,
} from "@tabler/icons-react";

export const NavbarComponent = () => {
  return (
    <Flex h="100%" direction="column" justify="space-between" align="center">
      <ActionIcon w={40} h={40}>
        <IconAlignBoxBottomLeftFilled color="#1c7ed6" size={40} />
      </ActionIcon>
      <Flex direction="column" align="center" gap="xs">
        <ActionIcon w={30} h={30}>
          <IconSettings size={30} color="#868e96" />
        </ActionIcon>
        <Avatar radius="xl" src={avatar} alt="it's me" />
      </Flex>
    </Flex>
  );
};
