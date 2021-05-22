import {MenuItem} from '../interfaces/app.interfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switch Screen',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert Screen',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Input Screen',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'PullToRefresh Screen',
    icon: 'refresh-circle-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'SectionListScreen Screen',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
];
