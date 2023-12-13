import "./App.css";
import { ChakraProvider, Container, Box, Icon } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Route, Routes, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import Requests from "./containers/Requests";
import CompletedRequests from "./containers/CompletedRequests";
import AddRequest from "./containers/AddRequest";
import Settings from "./containers/Settings";
import AddIS from "./containers/AddIS";
import AddSG from "./containers/AddSG";

function App() {
  return (
    <ChakraProvider>
      <NavBar>
        <Icon as={ViewIcon} w={8} h={8} color="blue.600" mr={14} />
        <Box mr={10} className="navlink">
          <NavLink to="/">Список заявок</NavLink>
        </Box>
        <Box mr={10} className="navlink">
          <NavLink to="/completed">Завершённые заявки</NavLink>
        </Box>
        <Box mr={10} className="navlink">
          <NavLink to="/add">Добавить заявку</NavLink>
        </Box>
        <Box ml={"auto"} className="navlink">
          <NavLink to="/settings">Настройки</NavLink>
        </Box>
      </NavBar>
      <Container maxW="container.lg">
        <Routes>
          <Route path="/" element={<Requests />} />
          <Route path="/completed" element={<CompletedRequests />} />
          <Route path="/add" element={<AddRequest />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/addIS" element={<AddIS />} />
          <Route path="/addSG" element={<AddSG />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
