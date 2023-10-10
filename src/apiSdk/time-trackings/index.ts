import queryString from 'query-string';
import { TimeTrackingInterface, TimeTrackingGetQueryInterface } from 'interfaces/time-tracking';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTimeTrackings = async (
  query?: TimeTrackingGetQueryInterface,
): Promise<PaginatedInterface<TimeTrackingInterface>> => {
  return fetcher('/api/time-trackings', {}, query);
};

export const createTimeTracking = async (timeTracking: TimeTrackingInterface) => {
  return fetcher('/api/time-trackings', { method: 'POST', body: JSON.stringify(timeTracking) });
};

export const updateTimeTrackingById = async (id: string, timeTracking: TimeTrackingInterface) => {
  return fetcher(`/api/time-trackings/${id}`, { method: 'PUT', body: JSON.stringify(timeTracking) });
};

export const getTimeTrackingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/time-trackings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTimeTrackingById = async (id: string) => {
  return fetcher(`/api/time-trackings/${id}`, { method: 'DELETE' });
};
