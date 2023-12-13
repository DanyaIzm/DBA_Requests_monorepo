import {
  Container,
  Flex,
  Link,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  VStack,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const AddRequest = () => {
  const sendRequest = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <form method="post" onSubmit={sendRequest}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Имя заявителя</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Информационная система</FormLabel>
            <Select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <FormHelperText>
              Если нужной системы нет, то можно её добавить на этой&nbsp;
              <RouterLink to={"/addIS"} className="link">
                странице
              </RouterLink>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Общество группа</FormLabel>
            <Select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <FormHelperText>
              Если нет нужной ОГ, то можно её добавить на этой&nbsp;
              <RouterLink to={"/addSG"} className="link">
                странице
              </RouterLink>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Строка связи с БД</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Описание проблемы</FormLabel>
            <Textarea placeholder="Описание проблемы" size="sm" />
          </FormControl>
          <Button colorScheme="blue" size="md" type="submit">
            Отправить
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default AddRequest;
