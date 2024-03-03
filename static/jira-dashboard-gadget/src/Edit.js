import React from 'react';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view } from '@forge/bridge';

function Edit() {
  const onSubmit = (formData) => view.submit(formData);

  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field name="name" label="Name">
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          <Field name="description" label="Description">
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;
