import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'ndvi index',
    path: '/dashboard/ndviindex',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'sample ndvi',
    path: '/dashboard/samplendvi',
    icon: getIcon(fileTextFill)
  },
  
];

export default sidebarConfig;
