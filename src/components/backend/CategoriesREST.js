import { Get } from './Generic.js'

export const CategoryTableHeader = [
    "ID",
    "Name"
]

export const CategoryURL = "http://localhost:8080/api/v1/categories"

export const GetCategories = async () => {
    return Get(CategoryURL)
}

export default CategoryTableHeader;