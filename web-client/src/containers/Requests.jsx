import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableCaption,
  Tbody,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Checkbox,
  Flex,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_REQUESTS } from "../api";

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const getUncompletedRequests = async () => {
    let results = await axios.get(API_REQUESTS + "?completed=false");

    setRequests(results.data);
  };

  useEffect(() => {
    getUncompletedRequests();
  }, []);

  const completeRequest = async (request) => {
    console.log(request.completed);
    await axios.post(API_REQUESTS + request.id + "?status=true");

    getUncompletedRequests();
  };

  return (
    <>
      <TableContainer whiteSpace={"wrap"}>
        <Table variant="striped">
          <TableCaption>Список всех запросов</TableCaption>
          <Thead>
            <Tr>
              <Th>Имя заявителя</Th>
              <Th>Информационная система</Th>
              <Th>Название ОГ</Th>
              <Th>Строка связи с БД</Th>
              <Th>Описание проблемы</Th>
              <Th>Решена</Th>
            </Tr>
          </Thead>
          <Tbody>
            {requests.map((result) => (
              <Tr key={result.id}>
                <Td>{result.applicant_name}</Td>
                <Td>{result.information_system.name}</Td>
                <Td>{result.society_group.name}</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="teal">
                        {result.database_url.slice(0, 8) + "..."}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody px={10}>{result.database_url}</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="teal">
                        {result.description.slice(0, 14) + "..."}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody px={10}>{result.description}</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
                <Td>
                  <form>
                    <Flex align={"center"} justify={"center"}>
                      <Checkbox
                        isChecked={result.completed}
                        onChange={() => completeRequest(result)}
                      ></Checkbox>
                    </Flex>
                  </form>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Requests;
