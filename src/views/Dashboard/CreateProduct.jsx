import React, { useState } from "react";
// Chakra imports
import {
  Flex,
  Text,
  useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Textarea,
  Input,
  FormHelperText,
  Spinner,
  Box,
  Image,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const CreateProduct = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const [state, setState] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmitProduct = (event) => {
    event.preventDefault();
    // todo: upload product image;
    setTimeout(() => {
      setLoading(true);
    }, [10000]);
    console.log(state);
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader
          p="6px 0px 22px 0px"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Create Product
          </Text>
        </CardHeader>
        <CardBody
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <FormControl id="name">
              <FormLabel>Product Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                width={700}
                required
              />
            </FormControl>
            <FormControl id="price" mt="3">
              <FormLabel>Price</FormLabel>
              <Input
                type="text"
                name="price"
                value={state.price}
                onChange={handleChange}
                width={700}
                required
              />
              <FormHelperText>Enter price in UGX.</FormHelperText>
            </FormControl>
            <FormControl id="description" mt="3">
              <FormLabel>Description</FormLabel>
              <Textarea
                rows="4"
                name="description"
                value={state.description}
                onChange={handleChange}
                width={700}
              />
              <FormHelperText>
                Brief description about the product.
              </FormHelperText>
            </FormControl>
            <FormControl id="stock" mt="3">
              <FormLabel>Stock on Hand</FormLabel>
              <Input
                type="text"
                name="stock"
                value={state.stock}
                onChange={handleChange}
                required
              />
              <FormHelperText>Amount in KGs</FormHelperText>
            </FormControl>
            <Button onClick={handleSubmitProduct} variant="solid" mt="5">
              {loading ? <Spinner /> : "Create Product"}
            </Button>
          </Box>
          <Box ml="10">
            <Image
              src="https://pbs.twimg.com/media/DEcdxhxXkAETc0D.png"
              alt="Product Banner"
            />
          </Box>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default CreateProduct;
