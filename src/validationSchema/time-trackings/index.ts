import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  clock_in: yup.date().required(),
  clock_out: yup.date().nullable(),
  total_hours: yup.number().integer().nullable(),
  day: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
