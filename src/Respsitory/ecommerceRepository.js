import { httpClient } from "./httpclient";

export class EcommerceRepository{

    async getEcommerceBook(id){
        try {
            const response = await httpClient.get("api/open/common/book/ecommerce/get/" + id)
            return response?.data
        } catch (error) {
            
        }
    }
    
    async getAllEcommerce(){
        try {
            const response = await httpClient.get("/api/open/common/book/mcq/get-all")
            return response?.data
        } catch (error) {
            
        }
    }

    async getAllInquiry(){
        try {
            const response = await httpClient.get("api/open/sales/ecommerce/get-all-inquiry")
            return response?.data
        } catch (error) {
            
        }
    }

    async uploadEcommerce(data){
        try {
            const response = await httpClient.post("/api/admin/book/upload-book",data);
            return response?.data
        } catch (error) {
            
        }
    }

    async deleteBook(id){
        try{
        const response = await httpClient.delete("/api/admin/book/book/delete/"+id);
        return response?.data;
        } catch(error){
            
        }
    }

    async deleteInquiry(id){
        try {
            const response = await httpClient.delete("/api/admin/sales/ecommerce/delete-inquiry/"+id)
            return response?.data
        } catch (error) {
            
        }
    }
}