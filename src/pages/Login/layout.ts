import {Layout} from './types';

const controllers: Array<Layout> = [
  {
    field: 'username',
    placeholder: 'username',
    type: 'text',
    icon: '/user.svg',
  },
  {
    field: 'password',
    placeholder: '*****',
    type: 'password',
    icon: '/lock.svg',
  },
];

export {controllers};
