export enum Users {
  STUDENT,
  CLIENT,
  THIRD_PARTY,
  PROJECT_MANAGER,
  EXECUTIVE,
}

export interface WithUserType {
  userType: Users
}

export interface WithUserTypeSetter {
  setUserType: React.Dispatch<React.SetStateAction<Users>>
}

export const userTypeToStringMap = {
  [Users.STUDENT]: 'Student',
  [Users.CLIENT]: 'Client',
  [Users.THIRD_PARTY]: 'Third Party',
  [Users.EXECUTIVE]: 'Executive',
  [Users.PROJECT_MANAGER]: 'Project Manager',
}
