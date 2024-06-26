import { httpClient } from "./httpclient"; // Import httpClient instance

export default class TeacherRepository {
    // Method to get verified teachers
    async getVerifiedTeacher() {
        try {
            const response = await httpClient.get("/api/admin/service/get-teacher/verified"); // Send GET request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to get unverified teachers
    async getUnVerifiedTeacher() {
        try {
            const response = await httpClient.get("/api/admin/service/get-teacher/unverified"); // Send GET request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    // Method to verify a teacsher
    async verifyTeacher(id) {
        try {
            const response = await httpClient.post(`/api/admin/service/verify-teacher/${id}`); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

     // Method to verify a teacsher
     async getAssignedSubjects(email) {
        try {
            const response = await httpClient.post(`/api/open/teacher/subject/get/`, {email}); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    async assignSubject(email, subjectId){
        try {
            const response = await httpClient.post(`/api/open/teacher/assign-subject/${subjectId}`, {email}); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }

    async unAssignSubject(email, subjectId){
        try {
            const response = await httpClient.post(`/api/open/teacher/subject/delete/${subjectId}`, {email}); // Send POST request
            return response?.data; // Return response data
        } catch (error) {
            // Handle error
        }
    }
}
