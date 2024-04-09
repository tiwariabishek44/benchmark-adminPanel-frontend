import { httpClient } from "./httpclient";

export class BookRepository{
    
    async getAllMcq(){
        try {
            const response = await httpClient.get("/api/open/common/book/mcq/get-all")
            return response?.data
        } catch (error) {
            
        }
    }

    async getAllPublication(){
        try {
            const response = await httpClient.get("/api/open/common/book/ecommerce/get-all")
            return response?.data
        } catch (error) {
            
        }
    }

    async getClassBooks(data){
        try {
            const response = await httpClient.post("/api/open/common/book/class-books/get-all",data)
            return response?.data
        } catch (error) {
            
        }
    }

    async uploadBook(data){
        try {
            const response = await httpClient.post("/api/admin/book/upload-book",data);
            return response?.data
        } catch (error) {
            
        }
    }

    async getAllSubject(){
        try {
            const response = await httpClient.get("/api/open/common/book/subject/get-all")
            return response?.data
        } catch (error) {
            
        }
    }

    async createSubject(data){
        try {
            const response = await httpClient.post("/api/admin/book/create-subject",data)
            return response?.data
        } catch (error) {
            
        }
    }

    async downloadBook(url){
        try {
            const response = await httpClient.get(url,{responseType:'blob'})
            return response?.data
        } catch (error) {
            
        }
    }

    async deleteSubject(id){
        try {
            const response = await httpClient.post("/api/admin/book/delete-subject/"+ id)
            return response?.data
        } catch (error) {
            
        }
    }

    async deleteBook(id){
        try{
        const response = await httpClient.delete("/api/admin/book/book/delete/"+id);
        return response?.data

        } catch(error){

        }
    }
}