import Button, { ButtonGroup } from '@atlaskit/button';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { view } from '@forge/bridge';

export default function Edit() {
  return (
    <Form onSubmit={view.submit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field name="name" label="Name">
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>

          <Field name="description" label="Description">
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>

          <br />

          <ButtonGroup>
            <Button appearance="primary" type="submit" isDisabled={submitting}>
              Save
            </Button>

            <Button appearance="subtle" onClick={view.close}>
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}
