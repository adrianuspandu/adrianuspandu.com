'use client'

import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebase";

export const getImageURL = async (filePath) => {
    try {
        const pathReference = ref(storage, filePath);
        return await getDownloadURL(pathReference)
    } catch(error) {
        console.error("error fetching file URL", error)
        return null
    }
};

export const listImages = async (folderPath = "images/") => {
    try {
        const folderRef = ref(storage, folderPath)
        const result = await listAll(folderRef)
        const fileURLs = await Promise.all(result.items.map(item => getDownloadURL(item)))
        return fileURLs
    } catch (error) {
        console.error("error listing files:", error);
        return []
    }
}
