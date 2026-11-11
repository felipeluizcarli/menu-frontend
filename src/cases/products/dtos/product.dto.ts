import type { CategoryDTO } from "../../categories/dtos/category.dto";

export interface ProductDto {
    id: string;
    name: string;
    active: boolean;
    description?: string;
    price: number;
    picture?: string;
    category: CategoryDTO | null;
}