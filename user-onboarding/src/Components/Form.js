import React from 'react'
import { withFormik, Form, Field } from 'formik';



function Form() {
    return (
     <Form>
         <Field type="text" name="name" placeholer="Name"/>
         <Field type="email" name="email" placeholder="Email"/>
         <Field type="password" name="password" placeholder="Password"/>
     </Form>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({name, email, password}){
        return{
            name: name || "",
            email: email || "",
            password: password || ""
        };
    },

    handleSubmit(values){

    }
})(Form)


export default Form;