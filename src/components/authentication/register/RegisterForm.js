import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';


import Helpers from '../../../core/func/Helpers';
import { useNotifications } from '@mantine/notifications';
import { useAuth } from '../../../core/hooks/useAuth';
import lib from '../lib';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { set } = useAuth();
  const notify = useNotifications();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    phone: Yup.string().min(11, 'Too Short!').max(11, 'Too Long!').required('Phone Number is required'),
    company: Yup.string().min(2, 'Too Short!').max(60, 'Too Long!').required('Company is required'),
    address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Address is required'),
    username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Username is required'),
    password: Yup.string().min(6, 'Too Short!').required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      username: '',
      password: ''
    },
    validationSchema: RegisterSchema,

    onSubmit: async (values) => {
      let reqData = await lib.registerUser(values)
      if(reqData.status === 200){
        if (reqData.success === true ) {
          Helpers.alert({ notifications: notify, icon: 'success', color: 'green', message: 'Registration Success' })
          setTimeout(() => {
            // navigate('/login', { replace: true });
          }, 3000)
        } else{
          Helpers.alert({ notifications: notify, icon: 'success', color: 'red', message: reqData.msg })
        }
      }
      if(reqData.status === 'error'){
        Helpers.alert({ notifications: notify, icon: 'success', color: 'red', message: reqData.msg })
      }
      console.log(reqData);
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="phone"
            type="tel"
            label="Phone Number"
            {...getFieldProps('phone')}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="company"
              type="company"
              label="Company"
              {...getFieldProps('company')}
              error={Boolean(touched.company && errors.company)}
              helperText={touched.company && errors.company}
            />
            <TextField
              fullWidth
              autoComplete="address"
              type="address"
              label="Address"
              {...getFieldProps('address')}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            fullWidth
            autoComplete="username"
            type="username"
            label="Username"
            {...getFieldProps('username')}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
