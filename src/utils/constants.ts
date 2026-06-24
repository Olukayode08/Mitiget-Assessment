import type { NavConfig } from '../types/layout.types'
import {
  Home01Icon,
  ManagerIcon,
  Alert01Icon,
} from '@hugeicons/core-free-icons'

export const NAV_CONFIG: NavConfig = [
  {
    items: [
      {
        label: 'Home',
        path: '/',
        icon: Home01Icon,
      },
      {
        label: 'Administration',
        icon: ManagerIcon,
        subPages: [
          { label: 'Departments', path: '/departments' },
          { label: 'Units', path: '/units' },
          { label: 'Sections', path: '/sections' },
        ],
      },
      {
        label: 'Assignments',
        icon: Alert01Icon,
        subPages: [
          { label: 'All Assignments', path: '/assignments/all' },
          { label: 'Active Tasks', path: '/assignments/active' },
          { label: 'Pending Reviews', path: '/assignments/pending' },
          { label: 'Completed', path: '/assignments/completed' },
        ],
      },
    ],
  },
]
