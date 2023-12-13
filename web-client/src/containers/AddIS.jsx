import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

const AddIS = () => {
  const navigate = useNavigate();

  const sendIS = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(navigate("/add"));
  };

  return (
    <>
      <form method="post" onSubmit={sendIS}>
        <VStack>
          <FormControl>
            <FormLabel>Информационная система</FormLabel>
            <Input type="text" placeholder="Название информационной системы" />
          </FormControl>
          <Button colorScheme="blue" size="md" type="submit">
            Отправить
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default AddIS;
