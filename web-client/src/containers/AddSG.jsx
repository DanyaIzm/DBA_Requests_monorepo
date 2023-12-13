import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

const AddSG = () => {
  const navigate = useNavigate();

  const sendSG = (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/add");
  };

  return (
    <>
      <form method="post" onSubmit={sendSG}>
        <VStack>
          <FormControl>
            <FormLabel>Общество группа</FormLabel>
            <Input type="text" placeholder="Название общества группы" />
          </FormControl>
          <Button colorScheme="blue" size="md" type="submit">
            Отправить
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default AddSG;
