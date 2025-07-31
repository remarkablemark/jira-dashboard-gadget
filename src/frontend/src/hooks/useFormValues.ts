import { useEffect, useState } from 'react';

import { decode } from '../helpers';
import type { FormValues } from '../types';
import { useForgeContext } from './useForgeContext';

export function useFormValues() {
  const context = useForgeContext();
  const [formValues, setFormValues] = useState<FormValues | undefined>();

  useEffect(() => {
    if (!context) {
      return;
    }

    const data = context.extension.gadgetConfiguration;

    for (const key in data) {
      /* istanbul ignore else */
      if (typeof data[key] === 'string') {
        data[key] = decode(data[key]);
      }
    }

    /* istanbul ignore else */
    if (JSON.stringify(data) !== JSON.stringify(formValues)) {
      setFormValues(data);
    }
  }, [context, formValues]);

  return formValues;
}
