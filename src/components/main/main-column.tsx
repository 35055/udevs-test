import { Flex, Box, Text } from "@mantine/core";
import { TCart } from "../../types/t-cart";
import { Cart } from "../cart/cart";

type TProps = {
  title: string;
  data: TCart[];
  color: string;
};

export const MainColumn = (props: TProps) => {
  const { title, data, color } = props;

  return (
    <Flex
      w="400px"
      direction="column"
      gap="0.6rem"
      sx={{
        background: "#f1f3f5",
        borderRadius: "8px",
        height: "max-content",
        flexShrink: 0,
      }}
    >
      <Box
        bg={color}
        sx={{
          borderRadius: "8px 8px 0 0",
        }}
      >
        <Flex
          align="center"
          gap="0.2rem"
          sx={{
            marginLeft: "0.6rem ",
            color: "white",
            fontSize: "1rem",
          }}
        >
          <h3>{title}</h3>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "900",
            }}
          >
            ({data.length})
          </p>
        </Flex>
      </Box>
      <Flex
        direction="column"
        gap="0.6rem"
        sx={{
          margin: "0 0.6rem 0.6rem 0.6rem",
        }}
      >
        {data.map((product, index) => (
          <Cart key={index} cart={product} index={index} />
        ))}
      </Flex>
    </Flex>
  );
};
