import { TimeTrackingInterface } from 'interfaces/time-tracking';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  position: string;
  start_date: any;
  end_date?: any;
  salary: number;
  status: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  time_tracking?: TimeTrackingInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    time_tracking?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  status?: string;
  user_id?: string;
  company_id?: string;
}
