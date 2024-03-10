import type { FormValues } from '../types';

interface Props {
  formValues: FormValues;
  text: string;
}

export default function View(props: Props) {
  return (
    <div>
      {props.text} {JSON.stringify(props.formValues)}
    </div>
  );
}
