import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'

export default function TobetoTextInput(...props) {
  
    const [field, meta] = useField(props)
    return (
    <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props}/>
        {meta.touched && !!meta.error ? (
            <Label pointing basic color="red" content={error}></Label>
        ):null} 
    </FormField>
  )
}
