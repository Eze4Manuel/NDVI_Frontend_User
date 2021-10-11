import React, { useState } from "react";
import './GenerateNDVI.css';
import { Modal, Button as MantineButton, Group } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { TextInput, Button } from '@mantine/core';
import { LoadingOverlay } from '@mantine/core';

const GenerateNDVI = ({ opened, setOpened }) => {

    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },
        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
        },
    });

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Generate NDVI"
            size="45%"
            className="inner_section" 
        >
            <LoadingOverlay
                loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
                overlayOpacity={0.3}
                overlayColor="#c5c5c5"
            />
    
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    required
                    label="Email"
                    error={form.errors.email && 'Please specify valid email'}
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                />

                <TextInput
                    label="Name"
                    value={form.values.name}
                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                />

                <Button type="submit">Submit</Button>
            </form>


        </Modal>
    )
}


export default GenerateNDVI;