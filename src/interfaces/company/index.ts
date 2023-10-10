import { BusinessOwnerInterface } from 'interfaces/business-owner';
import { EmployeeInterface } from 'interfaces/employee';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  business_owner?: BusinessOwnerInterface[];
  employee?: EmployeeInterface[];
  hr_manager?: HrManagerInterface[];
  user?: UserInterface;
  _count?: {
    business_owner?: number;
    employee?: number;
    hr_manager?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
