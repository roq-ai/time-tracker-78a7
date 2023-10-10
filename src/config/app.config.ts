interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'Time tracker',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage employee data', 'Manage time tracking'],
  getQuoteUrl: 'https://app.roq.ai/proposal/58ed86c9-76f8-46ee-a0d6-51274a0a26d9',
};
