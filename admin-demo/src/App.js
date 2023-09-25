import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}
export default App;
