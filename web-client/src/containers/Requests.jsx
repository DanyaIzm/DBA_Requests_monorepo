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

import React from "react";

const Requests = () => {
  const completeRequest = (e) => {
    console.log(e);
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
            <Tr>
              <Td>Иванов И.И.</Td>
              <Td>Сообщество Estriper</Td>
              <Td>Общество пингвинов поедающих обыкновенных</Td>
              <Td>
                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme="teal">postgresql:/...</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody px={10}>
                      postgresql://admin:admin/192.168.1.1:5432/main_base
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Td>
              <Td>
                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme="teal">Короче, если к...</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody px={10}>
                      Короче, если кратко: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Culpa aut deserunt quia
                      totam cupiditate eum, sed accusantium accusamus eius
                      obcaecati laborum labore, veniam rerum. Dolorum harum
                      rerum animi ipsam, dolores reiciendis amet minima tempora
                      officia dolor nesciunt voluptatum dolore similique, earum
                      aliquam! Temporibus, commodi velit! Doloribus enim id
                      molestias omnis sed delectus dolor suscipit fugiat
                      laboriosam? Facilis pariatur sapiente veniam, quasi nemo
                      reiciendis rerum mollitia similique incidunt modi non
                      quas.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Td>
              <Td>
                <form>
                  <Flex align={"center"} justify={"center"}>
                    <Checkbox onChange={completeRequest}></Checkbox>
                  </Flex>
                </form>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Requests;
