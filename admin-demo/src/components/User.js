import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DeleteButton,
} from "react-admin";

import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="company" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <NumberInput source="phone" />
      <TextInput source="company" />
    </SimpleForm>
  </Edit>
);
