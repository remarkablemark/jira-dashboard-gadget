import Button, { ButtonGroup } from '@atlaskit/button';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { view } from '@forge/bridge';

interface FormData {
  name: string;
  description: string;
}

export default function Edit() {
  function onSubmit(formData: FormData) {
    view.submit(formData);
  }

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
          <br />
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>
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