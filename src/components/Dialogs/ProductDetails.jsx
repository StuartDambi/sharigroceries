import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";

const ProductDetailsDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>
        <DrawerBody>
          <form
            id="my-form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submitted");
            }}
          >
            <Input name="nickname" placeholder="Type here..." />
          </form>
        </DrawerBody>
        <DrawerFooter>
          <Button type="submit" form="my-form">
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetailsDrawer;
