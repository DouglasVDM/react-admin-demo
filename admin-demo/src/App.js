import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

// Components
import { UserList } from "./components/User";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
}
export default App;
