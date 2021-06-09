import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ImageInput,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='store' />
        <TextField source='Category' />
        <TextField source='Product' />
        <TextField source='Price' />
        <DateField source='publishedAt' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
       </Datagrid>
    </List>
  )
}

export default PostList
