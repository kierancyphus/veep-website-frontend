import { Users } from 'types/user'
import { Projects } from 'types/projects'

export interface WithSetter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>
}

type Steps = Record<
  Users,
  Record<Projects, Record<string, Array<string | Record<string, string>>>>
>

export interface WithSteps {
  steps: Steps
}
// change this so that the steps are embedded and I can pull the you are ... info from here too

export const steps: Steps = {
  [Users.STUDENT]: {
    [Projects.COMMUNITY]: {
      'Choose Project': [
        'August-September',
        'Project opportunities will be posted on the website and all social media accounts! Read up and see which ones would be the best fit for your goals.',
        {
          'Upcoming Projects': '/upcoming-projects',
          'Current Projects': '/current-projects',
          'Past Projects': '/past-projects',
        },
      ],
      Apply: [
        'September',
        'Once you have decided which projects you are interested in, you will be invited to fill out an online application where you can list your top three choices. Following a round of CV and response screening, you will be invited to (virtual) face-to-face interview so we can best determine which project and role you fit into best.',
      ],
      'Establish Team': [
        'Early October',
        "Congratulations - You are now officially a part of a VEEP Project! This step is crucial, as you will meet your team members, clients, technical project managers and any other third parties involved, setting the mood for the rest of the year to come. It's also at this stage where there will be a series of introductory events to get you on the ground running, and to set out team goals and expectations.",
      ],
      'Begin Work!': [
        'October',
        'At this point, you should have an idea of overall project trajectory, be familiar with what tools you are using (not necessarily how to use them - that may come later!), and have immediate action items from your project manager. Let the fun begin!',
      ],
      'Mid-Year Design Review': [
        'January',
        "This is a valuable mid year event that serves the purpose of a heat check, opportunity for external input, and for the first chance to show off your work to a larger audience. Each team will be responsible for giving a quick ~20 minute demo / presentation of what they've accomplished and future plans.",
      ],
      'Year-End Showcase': [
        'March',
        "Congratulations! You've made it! You've successfully completed a VEEP project and now have the opportunity to show it off to the world. The format this year is currently undecided, but will consist of a ~30 minute presentation of the product, as well as your growth as a team and professional individuals",
      ],
    },
    [Projects.CLUBS]: {
      temp: [],
    },
    [Projects.RESEARCH]: { temp: [] },
  },
  [Users.CLIENT]: {
    [Projects.COMMUNITY]: { temp: [] },
    [Projects.CLUBS]: { temp: [] },
    [Projects.RESEARCH]: { temp: [] },
  },
  [Users.THIRD_PARTY]: {
    [Projects.COMMUNITY]: { temp: [] },
    [Projects.CLUBS]: { temp: [] },
    [Projects.RESEARCH]: { temp: [] },
  },
  [Users.PROJECT_MANAGER]: {
    [Projects.COMMUNITY]: { temp: [] },
    [Projects.CLUBS]: { temp: [] },
    [Projects.RESEARCH]: { temp: [] },
  },
  [Users.EXECUTIVE]: {
    [Projects.COMMUNITY]: { temp: [] },
    [Projects.CLUBS]: { temp: [] },
    [Projects.RESEARCH]: { temp: [] },
  },
}
