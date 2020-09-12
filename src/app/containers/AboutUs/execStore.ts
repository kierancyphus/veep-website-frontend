import { ExecProfileProps } from './ExecProfile/ExecProfile'

export type PortFolios = Record<string, ExecProfileProps[]>

export const portfolios: PortFolios = {
  Directorship: [
    {
      name: 'Kieran Cyphus',
      veepRole: 'Co-Director',
      degree: 'Engineering Science: MI, Year 3',
      // photo: 'figure out how to do this later',
    },
    {
      name: 'Benjamin Liu',
      veepRole: 'Co-Director',
      degree: 'Mechanical Engineering, Year 4',
    },
  ],
  Operations: [
    {
      name: 'Kujtim (Bushi) Dokaj',
      veepRole: 'Project Manager Lead',
      degree: 'Industrial Engineering, Year 3',
    },
    {
      name: 'Audrey Melgar',
      veepRole: 'Director of Events',
      degree: 'Mechanical Engineering, Year 2',
    },
  ],
  'Business Development': [
    {
      name: 'Maeesha Biswas',
      veepRole: 'Co-Managing Director BD',
      degree: 'Industrial Engineering, Year 3',
    },
    {
      name: 'Yifei Liu',
      veepRole: 'Co-Managing Director BD',
      degree: 'Industrial Engineering, Year 4',
    },
    {
      name: 'Thivani Jeyakumar',
      veepRole: 'Associate BD',
      degree: 'Mechanical Engineering, Year 2',
    },
    {
      name: 'Yawar Ashraf',
      veepRole: 'Associate BD',
      degree: 'Engineering Science, Year 2',
    },
  ],
  Marketing: [
    {
      name: 'Mahzabin Karim',
      veepRole: 'Director of Marketing',
      degree: 'Civil Engineering, Year 2',
    },
  ],
  'Project Managers': [
    {
      name: 'Manik Chaudhery',
      veepRole: 'Technical Project Manager',
      degree: 'Computer Engineering, Year 4',
    },
  ],
}
