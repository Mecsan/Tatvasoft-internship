import React from 'react'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button } from '@mui/material'
import ErrorField from '../component/ErrorField';
import useStyles from '../styles/signup';

const roles = ["buyer", "seller"]

let schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    role: yup.string().oneOf(roles, "invalid roles").required("role is required"),
    password: yup.string().required("password is required").min(6, "password too sort").max(12, "password too large"),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    cpassword: ""
}


function Signup() {

    const classes = useStyles();

    return (

        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={schema}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => {

                        return <form className={classes.form} onSubmit={handleSubmit}>

                            <div className={classes.formGroup}>
                                <h3 className={classes.title}>Personal Information</h3>
                                <div className={classes.formItem}>
                                    <TextField
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='firstName'
                                        label="First Name"
                                        variant="standard"
                                    />
                                    <ErrorField touch={touched.firstName} err={errors.firstName} />
                                </div>

                                <div className={classes.formItem}>
                                    <TextField
                                        name='lastName'
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Last Name"
                                        variant="standard"
                                    />
                                    <ErrorField touch={touched.lastName} err={errors.lastName} />
                                </div>

                                <div className={classes.formItem}>
                                    <TextField
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Email Addresss"
                                        variant="standard"
                                        type='email'
                                    />
                                    <ErrorField touch={touched.email} err={errors.email} />
                                </div>

                                <div className={classes.formItem} style={{ flexDirection: "row" }}>
                                    <InputLabel>Roles : </InputLabel>
                                    <Select
                                        variant="standard"
                                        name='role'
                                        value={values.role}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {
                                            roles.map((role, idx) => <MenuItem key={idx} value={role}>{role}</MenuItem>)
                                        }
                                    </Select>
                                    <ErrorField touch={touched.role} err={errors.role} />

                                </div>


                            </div>

                            <div className={classes.formGroup}>
                                <h3 className={classes.title}>Login Information</h3>

                                <div className={classes.formItem}>
                                    <TextField
                                        name='password'
                                        label="Password"
                                        variant="standard"
                                        type='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorField touch={touched.password} err={errors.password} />

                                </div>

                                <div className={classes.formItem}>
                                    <TextField
                                        name='cpassword'
                                        label="Confirm Password"
                                        variant="standard"
                                        type='password'
                                        value={values.cpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorField touch={touched.cpassword} err={errors.cpassword} />

                                </div>
                            </div>

                            <Button variant='contained' color='primary' type='submit'>
                                Register
                            </Button>
                        </form>
                    }
                }
            </Formik>

        </div>
    )
}

export default Signup