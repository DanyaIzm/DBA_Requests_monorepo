import { Container, Flex } from "@chakra-ui/react";
import React from "react";

const NavBar = ({ children }) => {
  return (
    <Flex
      bg={["primary.500", "primary.500", "teal.100", "teal.100"]}
      mb={10}
      p={5}
      color={["Teal", "Teal", "primary.700", "primary.700"]}
    >
      <Container maxW="container.lg">
        <Flex align={"center"}>{children}</Flex>
      </Container>
    </Flex>
  );
};

export default NavBar;
