
import { api } from "@/lib/axios";
import type { CategoryDTO } from "../dtos/category.dto";

export const categoryService = {

    async listAll (): Promise<CategoryDTO[]> {
        const result = await api.get<CategoryDTO[]>(ENDPOINT);
        return result.data;
    },
    async findOne (id: string): Promise<CategoryDTO> {
        const result = await api.get<CategoryDTO>(`${ENDPOINT}/${id}`);
        return result.data;
    }    
}