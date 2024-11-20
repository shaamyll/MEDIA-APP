import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";

//1 Add video details into the server
export const addVideoAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/allvideos`,reqBody)
}


//2 get all Videos from the server
export const getVideoAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/allvideos`,"")
}

//3 delete a particuar video from the server
export const deleteVideoAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/allvideos/${id}`,"")
}

//4 add watch-history video details to the server
export const watchHistoryAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/watch-history`,reqBody)
}


//5 get watch-history video details from the server
export const getWatchHstoryAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/watch-history`,"")
}

//6 delete watch-history deatils
export const deleteWatchHistoryAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/watch-history/${id}`,"")
}
//7 add category into the server
export const addCategoryAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/category`,reqBody)
}

//8 get all categories from the server
export const getCategoryAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/category`,{})
}
//9 delete a category from the server
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/category/${id}`,{})
}

//10 get a particular video details from the server
export const getAVideo=async(id)=>{
    return await commonAPI('get',`${serverUrl}/allvideos/${id}`,"")
}

//11 update a particular video details from the server
export const updateCategoryAPI=async(id,reqBody)=>{
    return await commonAPI('put',`${serverUrl}/category/${id}`,reqBody)
}