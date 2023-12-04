import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from '../config/firebase-config';
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddProject = () => {
    const projectCollectionRef = collection(db, "projects");
    const {userID} = useGetUserInfo();
    const addProject = async ({
        projectName,
        projectDesc,
        course
    }) => {
        await addDoc(projectCollectionRef, {
            //data in here will get added to the collection
            userID,
            projectName,
            projectDesc, 
            course,
            createdAt: serverTimestamp(),
        })
    };
    return {addProject};
}