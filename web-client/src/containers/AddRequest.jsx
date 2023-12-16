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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  API_INFORMATION_SYSTEM,
  API_REQUESTS,
  API_SOCIETY_GROUP,
} from "../api";

const AddRequest = () => {
  const [applicantName, setApplicantName] = useState("");
  const [informationSystemIndex, setInformationSystemIndex] = useState(null);
  const [societyGroupIndex, setSocietyGroupIndex] = useState(null);
  const [dbString, setDbString] = useState("");
  const [description, setDescription] = useState("");

  const [informationSystems, setInformationSystems] = useState([]);
  const [societyGroups, setSocietyGroups] = useState([]);

  const navigate = useNavigate();

  const getInformationSystems = async () => {
    const result = await axios.get(API_INFORMATION_SYSTEM);

    setInformationSystems(result.data);

    if (result.data) {
      setInformationSystemIndex(result.data[0].id);
    }
  };

  const getSocietyGroups = async () => {
    const result = await axios.get(API_SOCIETY_GROUP);

    setSocietyGroups(result.data);

    if (result.data) {
      setSocietyGroupIndex(result.data[0].id);
    }
  };

  useEffect(() => {
    getInformationSystems();
    getSocietyGroups();
  }, []);

  const sendRequest = async (e) => {
    e.preventDefault();

    await axios.post(API_REQUESTS, {
      applicant_name: applicantName,
      information_system_id: informationSystemIndex,
      society_group_id: societyGroupIndex,
      database_url: dbString,
      description: description,
    });

    navigate("/");
  };

  return (
    <>
      <form method="post" onSubmit={sendRequest}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Имя заявителя</FormLabel>
            <Input
              type="text"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Информационная система</FormLabel>
            <Select onChange={(e) => setInformationSystemIndex(e.target.value)}>
              {informationSystems.map((infSys) => (
                <option key={infSys.id} value={infSys.id}>
                  {infSys.name}
                </option>
              ))}
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
            <Select onChange={(e) => setSocietyGroupIndex(e.target.value)}>
              {societyGroups.map((socGr) => (
                <option key={socGr.id} value={socGr.id}>
                  {socGr.name}
                </option>
              ))}
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
            <Input
              type="text"
              value={dbString}
              onChange={(e) => setDbString(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Описание проблемы</FormLabel>
            <Textarea
              placeholder="Описание проблемы"
              size="sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

export default AddRequest;
