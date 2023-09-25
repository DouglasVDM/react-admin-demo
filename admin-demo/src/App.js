import React from "react";
import { Admin, EditGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

// Components
import { UserEdit, UserList } from "./components/User";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource 
      name="users" 
      list={UserList}
      edit={UserEdit}
       />
    </Admin>
  );
}
export default App;
