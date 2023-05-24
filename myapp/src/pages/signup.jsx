import React from 'react'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button } from '@mui/material'
import ErrorField from '../component/ErrorField';
import useStyles from '../styles/signup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import request from '../services/request';

const roles = [{ rid: 1, role: "seller" },
{ rid: 2, role: "buyer" }]

let schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    roleId: yup.number().oneOf(roles.map(role => role.rid)).required("role is required"),
    password: yup.string().required("password is required").min(6, "password too sort").max(12, "password too large"),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
    password: "",
    cpassword: ""
}




function Signup() {

    const classes = useStyles();
    const navigate = useNavigate();

    const signup = async (values) => {
        const data = JSON.parse(JSON.stringify(values))
        delete data.cpassword

        const id = toast.loading("Please wait...")
        try {
            let res = await request({
                method: "post",
                url: "/api/user",
                data: JSON.stringify(data)
            })
            console.log(res)
            toast.update(id, { closeButton: true, render: "Register successfully", type: "success", isLoading: false });
            navigate("/products");
        } catch (err) {
            toast.update(id, { closeButton: true, render: err.response.data.error, type: "error", isLoading: false });
            console.log(err)
        }

    }

    return (

        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={signup}
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

                                <div className={classes.formItem} style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "20px"

                                }}>
                                    <InputLabel>Roles : </InputLabel>
                                    <Select
                                        size='small'
                                        variant="standard"
                                        name='roleId'
                                        value={values.roleId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {
                                            roles.map((role, idx) => <MenuItem key={idx} value={role.rid}>{role.role}</MenuItem>)
                                        }
                                    </Select>
                                    <ErrorField touch={touched.roleId} err={errors.roleId} />
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

                            <Button style={{
                                color: "white",
                                cursor: Object.keys(errors).length == 0 ? 'pointer' : 'not-allowed'
                            }} className={classes.submit} variant='contained' color='primary' type='submit'>
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