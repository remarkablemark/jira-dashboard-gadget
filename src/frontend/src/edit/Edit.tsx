import Button, { ButtonGroup } from '@atlaskit/button';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';

import type { FormValues, View } from '../types';

interface Props {
  formValues: FormValues;
  view: View;
}

export default function Edit(props: Props) {
  return (
    <Form<FormValues> onSubmit={props.view.submit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field name="name" label="Name" defaultValue={props.formValues.name}>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>

          <Field
            name="description"
            label="Description"
            defaultValue={props.formValues.description}
          >
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>

          <br />

          <ButtonGroup>
            <Button appearance="primary" type="submit" isDisabled={submitting}>
              Save
            </Button>

            <Button onClick={() => props.view.submit(props.formValues)}>
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}
