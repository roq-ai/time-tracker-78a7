import queryString from 'query-string';
import { HrManagerInterface, HrManagerGetQueryInterface } from 'interfaces/hr-manager';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHrManagers = async (
  query?: HrManagerGetQueryInterface,
): Promise<PaginatedInterface<HrManagerInterface>> => {
  return fetcher('/api/hr-managers', {}, query);
};

export const createHrManager = async (hrManager: HrManagerInterface) => {
  return fetcher('/api/hr-managers', { method: 'POST', body: JSON.stringify(hrManager) });
};

export const updateHrManagerById = async (id: string, hrManager: HrManagerInterface) => {
  return fetcher(`/api/hr-managers/${id}`, { method: 'PUT', body: JSON.stringify(hrManager) });
};

export const getHrManagerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/hr-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHrManagerById = async (id: string) => {
  return fetcher(`/api/hr-managers/${id}`, { method: 'DELETE' });
};
