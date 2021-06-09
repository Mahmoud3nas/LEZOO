import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput ,Dropdown} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit store ='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='store' />
        <TextInput source='Category' />
        <TextInput source='Product' />
        <TextInput source='Price' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />

        {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
