/*eslint-disable*/
import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Link
          // color={linkTeal}
          color="teal.400"
          href="/admin/dashboard"
          target="_blank"
        >
          SHARI'S GROCERY
        </Link>
      </Text>
    </Flex>
  );
}
