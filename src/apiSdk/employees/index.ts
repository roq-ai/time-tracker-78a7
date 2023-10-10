import queryString from 'query-string';
import { EmployeeInterface, EmployeeGetQueryInterface } from 'interfaces/employee';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployees = async (
  query?: EmployeeGetQueryInterface,
): Promise<PaginatedInterface<EmployeeInterface>> => {
  return fetcher('/api/employees', {}, query);
};

export const createEmployee = async (employee: EmployeeInterface) => {
  return fetcher('/api/employees', { method: 'POST', body: JSON.stringify(employee) });
};

export const updateEmployeeById = async (id: string, employee: EmployeeInterface) => {
  return fetcher(`/api/employees/${id}`, { method: 'PUT', body: JSON.stringify(employee) });
};

export const getEmployeeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/employees/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEmployeeById = async (id: string) => {
  return fetcher(`/api/employees/${id}`, { method: 'DELETE' });
};
