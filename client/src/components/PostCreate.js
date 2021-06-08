import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create store ='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='store' />
        <TextInput source='Category' />
        <TextInput source='Price' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
