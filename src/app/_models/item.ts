import { Category } from './category';

export interface Item {
    title: string;
    description: string;
    price: number;
    pricePlusTax?: number;
    category: Category;
    import: boolean;
}
