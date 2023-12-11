import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from '../config/firebase-config';
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddSubmission= () => {
    const submissionCollectionRef = collection(db, "submissions");
    const {userID} = useGetUserInfo();
    const addSubmission= async ({
        submissionName,
        projectName
    }) => {
        await addDoc(submissionCollectionRef, {
            //data in here will get added to the collection
            userID,
            submissionName,
            projectName,
            createdAt: serverTimestamp(),
        })
    };
    return {addSubmission};
}