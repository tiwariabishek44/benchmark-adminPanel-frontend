import { httpClient } from "./httpclient"; // Import httpClient instance

export class BookRepository {
    
    // Method to get all MCQs
    async getAllMcq() {
        try {
            const response = await httpClient.get("/api/open/common/book/mcq/get-all"); // Send GET request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to get all publications
    async getAllPublication() {
        try {
            const response = await httpClient.get("/api/open/common/book/ecommerce/get-all"); // Send GET request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to get class books
    async getClassBooks(data) {
        try {
            const response = await httpClient.post("/api/open/common/book/class-books/get-all", data); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to upload a book
    async uploadBook(data) {
        try {
            const response = await httpClient.post("/api/admin/book/upload-book", data); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to get all subjects
    async getAllSubject() {
        try {
            const response = await httpClient.get("/api/open/common/book/subject/get-all"); // Send GET request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to create a subject
    async createSubject(data) {
        try {
            const response = await httpClient.post("/api/admin/book/create-subject", data); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to download a book
    async downloadBook(url) {
        try {
            const response = await httpClient.get(url, { responseType: 'blob' }); // Send GET request with blob responseType
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to delete a subject
    async deleteSubject(id) {
        try {
            const response = await httpClient.post("/api/admin/book/delete-subject/" + id); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to delete a book
    async deleteBook(id) {
        try {
            const response = await httpClient.delete("/api/admin/book/book/delete/" + id); // Send DELETE request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }
}
