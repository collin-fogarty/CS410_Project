import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from '../config/firebase-config';
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddLeaderboard = () => {
    const leaderboardCollectionRef = collection(db, "leaderboards");
    const {userID} = useGetUserInfo();
    const addLeaderboard = async ({
        projectName,
        columnNames,
        rankingCol
    }) => {
        await addDoc(leaderboardCollectionRef, {
            //data in here will get added to the collection
            userID,
            projectName,
            columnNames,
            rankingCol,
            createdAt: serverTimestamp(),
        })
    };
    return {addLeaderboard};
}