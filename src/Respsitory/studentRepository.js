import { httpClient } from "./httpclient";

export default class StudentRepository {
    async getAllStudentWitlPurchase(){
        try {
            const response = await httpClient.get("/api/admin/sales/students-with-purchase");
            return response?.data
            console.log(response?.data)
        } catch (error) {
            
        }
    }
}