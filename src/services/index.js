import axiosInstance from "./axioxinstance";

export async function annonces(){
    if(localStorage.getItem("auth") != null){
        let token = localStorage.getItem("auth");
        return axiosInstance.get("https://rest-production-e2d3.up.railway.app/annonces", {
            headers: {"Authorization" : `Bearer ${token}`}
        });
    }else{
        return axiosInstance.get("https://rest-production-e2d3.up.railway.app/annonces");
    }
}
export async function favoris(){

}
