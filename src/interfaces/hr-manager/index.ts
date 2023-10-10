import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface HrManagerInterface {
  id?: string;
  department: string;
  start_date: any;
  end_date?: any;
  salary: number;
  status: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface HrManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  department?: string;
  status?: string;
  user_id?: string;
  company_id?: string;
}
