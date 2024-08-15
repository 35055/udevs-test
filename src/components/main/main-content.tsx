import { Flex } from "@mantine/core";
import newData from "../../data/new-data";
import deliveryData from "../../data/delivery-data";
import readyData from "../../data/ready-data";
import workpieceData from "../../data/workpiece-data";
import { MainColumn } from "./main-column";

export const MainContent = () => {
  return (
    <Flex
      gap="md"
      wrap="nowrap"
      style={{
        minWidth: "100%",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <MainColumn data={newData} title="НОВЫЙ" color="#1c7ed6" />
      <MainColumn data={workpieceData} title="ЗАГОТОВКА" color="#ffd43b" />
      <MainColumn data={readyData} title="ГОТОВ" color="#74b816" />
      <MainColumn data={deliveryData} title="КУРЬЕР В ПУТИ" color="#37b24d" />
    </Flex>
  );
};
