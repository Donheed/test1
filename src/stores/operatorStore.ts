import { defineStore } from 'pinia';
import type { User } from '../types';
import { Role } from '../types';

export const useOperatorStore = defineStore('operators', {
  state: () => ({
    operators: [
      {
        username: 'john.doe',
        password: 'password123',
        role: Role.USER
      },
      {
        username: 'jane.smith',
        password: 'password456',
        role: Role.USER
      },
      {
        username: 'admin',
        password: 'admin123',
        role: Role.ADMIN
      }
    ] as User[]
  }),
  actions: {
    addOperator(operator: User) {
      this.operators.push(operator);
    },
    deleteOperator(username: string) {
      this.operators = this.operators.filter(op => op.username !== username);
    }
  }
});