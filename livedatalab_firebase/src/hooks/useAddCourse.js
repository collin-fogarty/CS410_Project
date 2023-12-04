import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from '../config/firebase-config';
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddCourse = () => {
    const projectCollectionRef = collection(db, "courses");
    const {userID} = useGetUserInfo();
    const addCourse = async ({
        courseName,
        courseDesc
    }) => {
        await addDoc(projectCollectionRef, {
            //data in here will get added to the collection
            userID,
            courseName,
            courseDesc, 
            createdAt: serverTimestamp(),
        })
    };
    return {addCourse};
}