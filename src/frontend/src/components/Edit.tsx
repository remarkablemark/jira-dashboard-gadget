import Button, { ButtonGroup } from '@atlaskit/button';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { view } from '@forge/bridge';
import { useForgeContext } from 'src/hooks';

interface FormValues {
  name: string;
  description: string;
}

export default function Edit() {
  const context = useForgeContext();

  if (!context) {
    return 'Loading...';
  }

  const { name, description } = context.extension
    .gadgetConfiguration as FormValues;

  return (
    <Form<FormValues> onSubmit={view.submit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field name="name" label="Name" defaultValue={name}>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>

          <Field
            name="description"
            label="Description"
            defaultValue={description}
          >
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
