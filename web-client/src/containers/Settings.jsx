import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Settings = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(1257);
  }, []);

  const sendSettings = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const changeIdInput = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <form method="post" onSubmit={sendSettings}>
        <VStack>
          <FormControl>
            <FormLabel>ID чата для пересылки сообщений</FormLabel>
            <Input
              type="number"
              placeholder="ID"
              value={id}
              onChange={changeIdInput}
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

export default Settings;
