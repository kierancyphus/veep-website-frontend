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
  Operations: [],
  'Business Development': [],
  Marketing: [],
  'Project Managers': [],
  Website: [],
}
