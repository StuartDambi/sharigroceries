import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const DetailsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
      <Card>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Product Details</ModalHeader>
          <ModalBody>
            <form
              id="my-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Flex direction="column" justifyContent="space-between">
                <Input name="name" placeholder="Product name" mt="4" />
                <Input name="name" placeholder="Price" mt="4" />
                <Input name="name" placeholder="Stock" mt="4" />
                <Input name="name" placeholder="Desciption" mt="4" />
                <Input name="name" placeholder="Image" mt="4" />
              </Flex>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" form="my-form">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Card>
    </Modal>
  );
};

export default DetailsModal;
