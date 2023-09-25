import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { UserCreate, UserEdit, UserList } from "./components/User";
import { PostCreate, PostEdit, PostList } from "./components/Post";
import { authProvider } from "./authProvider";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import { createTheme } from '@mui/material';


const dataProvider = restProvider("http://localhost:3000");

const darkTheme = createTheme({
  palette: { mode: 'dark' },
});

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} darkTheme={darkTheme}>
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        recordRepresentation={(user)=>user.username}
        icon={PeopleIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
        icon={ArticleIcon}
      />
    </Admin>
  );
}
export default App;
