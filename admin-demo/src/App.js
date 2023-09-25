import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

// Components
import { UserCreate, UserEdit, UserList } from "./components/User";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}
export default App;
