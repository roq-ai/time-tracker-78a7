const mapping: Record<string, string> = {
  'business-owners': 'business_owner',
  companies: 'company',
  employees: 'employee',
  'hr-managers': 'hr_manager',
  'time-trackings': 'time_tracking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
