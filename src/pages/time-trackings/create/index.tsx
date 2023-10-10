import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createTimeTracking } from 'apiSdk/time-trackings';
import { timeTrackingValidationSchema } from 'validationSchema/time-trackings';
import { EmployeeInterface } from 'interfaces/employee';
import { getEmployees } from 'apiSdk/employees';
import { TimeTrackingInterface } from 'interfaces/time-tracking';

function TimeTrackingCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: TimeTrackingInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createTimeTracking(values);
      resetForm();
      router.push('/time-trackings');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<TimeTrackingInterface>({
    initialValues: {
      clock_in: new Date(new Date().toDateString()),
      clock_out: new Date(new Date().toDateString()),
      total_hours: 0,
      day: '',
      employee_id: (router.query.employee_id as string) ?? null,
    },
    validationSchema: timeTrackingValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Time Trackings',
              link: '/time-trackings',
            },
            {
              label: 'Create Time Tracking',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Time Tracking
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="clock_in" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Clock In
            </FormLabel>
            <DatePicker
              selected={formik.values?.clock_in ? new Date(formik.values?.clock_in) : null}
              onChange={(value: Date) => formik.setFieldValue('clock_in', value)}
            />
          </FormControl>
          <FormControl id="clock_out" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Clock Out
            </FormLabel>
            <DatePicker
              selected={formik.values?.clock_out ? new Date(formik.values?.clock_out) : null}
              onChange={(value: Date) => formik.setFieldValue('clock_out', value)}
            />
          </FormControl>

          <NumberInput
            label="Total Hours"
            formControlProps={{
              id: 'total_hours',
              isInvalid: !!formik.errors?.total_hours,
            }}
            name="total_hours"
            error={formik.errors?.total_hours}
            value={formik.values?.total_hours}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_hours', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.day}
            label={'Day'}
            props={{
              name: 'day',
              placeholder: 'Day',
              value: formik.values?.day,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<EmployeeInterface>
            formik={formik}
            name={'employee_id'}
            label={'Select Employee'}
            placeholder={'Select Employee'}
            fetcher={getEmployees}
            labelField={'position'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/time-trackings')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'time_tracking',
    operation: AccessOperationEnum.CREATE,
  }),
)(TimeTrackingCreatePage);
