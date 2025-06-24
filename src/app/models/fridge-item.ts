export interface FridgeItem {
    id: number;
    name: string;
    icon: string;
    location: 'FRIDGE' | 'FREEZER';
    category: string;
    quantity: number;
    storedDate: string;
    bestBeforeDate: string;
  }