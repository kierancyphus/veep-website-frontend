import { Tech } from 'types/projects'
import { ProjectMap } from './CardLayoutContainer'

export const upcomingProjects: ProjectMap = {
  'Community - Coming Soon': [],
  'Campus Clubs': [
    {
      orgName: 'VEEP',
      projectTitle: 'Web App Development',
      techStack: [
        Tech.FLASK,
        Tech.PYTHON,
        Tech.POSTGRES,
        Tech.TYPESCRIPT,
        Tech.REACT,
      ],
      description:
        'Design an implement a data management system and GUI to support storage and analysis of survey data, student portals to access resources and forums to help with cross team collaboration.',
      key: 'veep proj',
      apply: 'coming soon',
      roles: [
        'Frontend Developer',
        'Fullstack Developer',
        'Backend Developer',
        'Designer',
      ],
      aboutOrg:
        "VEEP is a student run organization that focuses on providing meaningful services to the community through student led projects design to prepare student for internships in industry. VEEP currently doesn't have a mature data management system, which is vital to supporting and imporoving their project model.",
    },
  ],
  'Research - Coming Soon': [],
}

export const currentProjects: ProjectMap = {
  'Coming Soon...': [],
}

export const previousProjects: ProjectMap = {
  '2018 - 2019': [
    {
      orgName: 'Girls eMentorship (GEM)',
      projectTitle: 'CRM System Development',
      techStack: [Tech.SQL, Tech.MSACCESS, Tech.EXCEL, Tech.PYTHON],
      description:
        'This project encompasses the development of a GEM specific CRM system to include data from all mentees/mentors, committee & board members, partners, donors. Specific emphasis and importance placed on the quality and governance of the data and potentially developing a tool/GUI to easily get analytics',
      key: 'Girls eMentorship (GEM) - CRM System Development',
      aboutOrg:
        'Girls E-Mentorship (GEM) is a charitable organization that offers an innovative mentorship program for high school girls facing multiple barriers. GEM equips girls with the necessary skills to achieve their grown-up aspirations, building a diverse network of talented, vibrant women and girls to inspire and support one another. ',
    },
    {
      orgName: '180 Degrees Consulting',
      projectTitle: 'Web Development',
      techStack: [Tech.HTML, Tech.CSS, Tech.JAVASCRIPT, Tech.SQL],
      description:
        '180 hopes to either improve the existing website or design a new website which is consistent with their branding and is easy to navigate. The existing website is not up-to-date and is rarely used due to the cluttering of information. 180 would like to improve the design of the website and include new features so that students can follow up on events and apply to be a consultant more easily.',
      key: '180 Degrees Consulting - Web Development',
      aboutOrg:
        'The 180 Degrees Consulting group at the University of Toronto is Canada’s first branch of the world’s largest university-based volunteer consultancy. The group aims to help students create a positive long-term social impact via low-cost consulting services to non-profits.',
    },
    {
      orgName: 'reBoot Canada',
      projectTitle: 'Process Improvement',
      techStack: [Tech.PYTHON, Tech.C, Tech.SQL, Tech.MSACCESS, Tech.EXCEL],
      description:
        'Automation/Process Improvement/Tools to increase accuracy, level of detail and overall reduction of time spent on the task would have a lot of value. (think bag security check in, but for donated computers). It would be great to track everything that comes in, and everything that leaves too.',
      key: 'reBoot Canada - Process Improvement',
      aboutOrg:
        'reBOOT Canada is a registered charity that refurbishes donated computer equipment to provide non-profits, charities, and individuals, with access to subsidized technology, software, and training. reBOOT Canada relies on donations of retired IT assets. Receiving (identifying, sorting, capturing donor contact info, etc) is a significant resource and time sink. ',
    },
    {
      orgName: 'VEEP',
      projectTitle: 'Database Improvement Project',
      techStack: [
        Tech.POSTGRES,
        Tech.PYTHON,
        Tech.HTML,
        Tech.CSS,
        Tech.JAVASCRIPT,
      ],
      description:
        "Historically VEEP has had issues keeping track of internal student development, surveys, and application data to use for program improvement. This project attempts to address that issue by making a database tool that can integrate with Google drive. The tool will have a web interface for VEEP students and executives to interact with & to query data. The primary deliverable of the project is a functional tool, which can be effectively implemented in VEEP's infrastructure.",
      key: 'VEEP - Database Improvement Project',
    },
    {
      orgName: 'Sentier',
      projectTitle: 'Mental Health Social Media App',
      techStack: [Tech.MONGODB, Tech.NODE, Tech.JAVA],
      description:
        'VEEP students will work alongside clinicians (ie. physicians, nurses, and social workers), staff from other leading health initiatives (ie. Bell Let’s Talk), and HOL’s existing team to develop an impactful solution for more meaningful conversations – a safe, anonymous, and moderated mobile app that connects people experiencing similar emotions through a hashtag system.',
      key: 'Sentier - Mental Health Focused Social Media App',
      aboutOrg:
        'Health Out Loud (HOL) is a CRA-registered charity that innovates health to be fun, relatable, and understandable through novel technological and other products. Building connectedness to improve mental health is a priority for our clients, which is an unmet need based on existing community platforms (ie. Facebook) that tend to foster superficial relationships and conversations. ',
    },
  ],
}
