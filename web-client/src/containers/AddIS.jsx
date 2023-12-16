import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { API_INFORMATION_SYSTEM } from "../api";
import axios from "axios";

const AddIS = () => {
  const [infS, setInfS] = useState("");

  const navigate = useNavigate();

  const sendIS = async (e) => {
    e.preventDefault();

    await axios.post(API_INFORMATION_SYSTEM, {
      name: infS,
    });

    navigate("/add");
  };

  return (
    <>
      <form method="post" onSubmit={sendIS}>
        <VStack>
          <FormControl>
            <FormLabel>Информационная система</FormLabel>
            <Input
              type="text"
              placeholder="Название информационной системы"
              value={infS}
              onChange={(e) => setInfS(e.target.value)}
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

export default AddIS;
