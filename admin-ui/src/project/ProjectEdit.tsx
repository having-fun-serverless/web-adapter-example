import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput, DateInput } from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <DateInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
