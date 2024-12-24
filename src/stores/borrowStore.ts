import { defineStore } from 'pinia';
import type { BorrowItem } from '../types';

export const useBorrowStore = defineStore('borrows', {
  state: () => ({
    borrowItems: [
      {
        id: '1',
        item_name: 'Laptop Dell XPS',
        amount: '1',
        borrow_date: new Date('2024-02-10'),
        return_date: new Date('2024-02-17'),
        borrower_name: 'Mahasiswa A',
        officer_name: 'john.doe'
      },
      {
        id: '2',
        item_name: 'Proyektor Epson',
        amount: '1',
        borrow_date: new Date('2024-02-12'),
        return_date: new Date('2024-02-14'),
        borrower_name: 'Mahasiswa B',
        officer_name: 'jane.smith'
      },
      {
        id: '3',
        item_name: 'Arduino Kit',
        amount: '2',
        borrow_date: new Date('2024-02-15'),
        return_date: new Date('2024-02-22'),
        borrower_name: 'Mahasiswa C',
        officer_name: 'john.doe'
      }
    ] as BorrowItem[]
  }),
  actions: {
    addBorrowItem(item: Omit<BorrowItem, 'id'>) {
      this.borrowItems.push({
        id: crypto.randomUUID(),
        ...item
      });
    },
    deleteBorrowItem(id: string) {
      this.borrowItems = this.borrowItems.filter(item => item.id !== id);
    }
  }
});