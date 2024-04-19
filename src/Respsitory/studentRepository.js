import { httpClient } from "./httpclient"; // Import httpClient instance

export default class StudentRepository {
    // Method to get all students with purchase
    async getAllStudentWitlPurchase() {
        try {
            const response = await httpClient.get("/api/admin/sales/students-with-purchase"); // Send GET request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }
}
