import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { API_SOCIETY_GROUP } from "../api";

const AddSG = () => {
  const [sg, setSg] = useState("");

  const navigate = useNavigate();

  const sendSG = async (e) => {
    e.preventDefault();

    await axios.post(API_SOCIETY_GROUP, {
      name: sg,
    });

    navigate("/add");
  };

  return (
    <>
      <form method="post" onSubmit={sendSG}>
        <VStack>
          <FormControl>
            <FormLabel>Общество группа</FormLabel>
            <Input
              type="text"
              placeholder="Название общества группы"
              value={sg}
              onChange={(e) => setSg(e.target.value)}
            />
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
