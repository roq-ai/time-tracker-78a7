import queryString from 'query-string';
import { BusinessOwnerInterface, BusinessOwnerGetQueryInterface } from 'interfaces/business-owner';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBusinessOwners = async (
  query?: BusinessOwnerGetQueryInterface,
): Promise<PaginatedInterface<BusinessOwnerInterface>> => {
  return fetcher('/api/business-owners', {}, query);
};

export const createBusinessOwner = async (businessOwner: BusinessOwnerInterface) => {
  return fetcher('/api/business-owners', { method: 'POST', body: JSON.stringify(businessOwner) });
};

export const updateBusinessOwnerById = async (id: string, businessOwner: BusinessOwnerInterface) => {
  return fetcher(`/api/business-owners/${id}`, { method: 'PUT', body: JSON.stringify(businessOwner) });
};

export const getBusinessOwnerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/business-owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBusinessOwnerById = async (id: string) => {
  return fetcher(`/api/business-owners/${id}`, { method: 'DELETE' });
};
