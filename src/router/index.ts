import { createRouter, createWebHistory } from 'vue-router';
import AdminLayout from '../layouts/AdminLayout.vue';
import ItemList from '../views/admin/ItemList.vue';
import OperatorList from '../views/admin/OperatorList.vue';
import BorrowSummary from '../views/admin/BorrowSummary.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'items',
          component: ItemList,
        },
        {
          path: 'all-operator',
          name: 'operators',
          component: OperatorList,
        },
        {
          path: 'summary',
          name: 'summary',
          component: BorrowSummary,
        },
      ],
    },
  ],
});

export default router;