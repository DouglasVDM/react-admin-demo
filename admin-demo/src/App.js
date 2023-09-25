import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { UserCreate, UserEdit, UserList } from "./components/User";
import { PostCreate, PostEdit, PostList } from "./components/Post";
import { authProvider } from "./authProvider";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        recordRepresentation={(user)=>user.username}
      />
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
    </Admin>
  );
}
export default App;
