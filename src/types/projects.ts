export interface WithKey {
  key: string
}

export enum Projects {
  COMMUNITY,
  CLUBS,
  RESEARCH,
}

export interface WithProjectType {
  projectType: Projects
}

export interface WithProjectTypeSetter {
  setProjectType: React.Dispatch<React.SetStateAction<Projects>>
}

export const projectTypeToStringMap = {
  [Projects.COMMUNITY]: 'Community',
  [Projects.CLUBS]: 'Campus Clubs',
  [Projects.RESEARCH]: 'Research',
}
