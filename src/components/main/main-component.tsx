import { Flex } from "@mantine/core";
import { MainInfoComponent } from "./main-info-component";
import { MainContent } from "./main-content";

export const MainComponent = () => {
  return (
    <Flex direction="column" gap="sm">
      <MainInfoComponent />
      <MainContent />
    </Flex>
  );
};
