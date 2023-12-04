import { useEffect, useState } from "react";
import { where, query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetLeaderboards = () => {
  const [leaderboards, setLeaderboards] = useState([]);

  const leaderboardCollectionRef = collection(db, "leaderboards");
  const {userID} = useGetUserInfo();
  const getLeaderboards = async () => {
    let unsubscribe
    try {
      const queryLeaderboards = query(
        leaderboardCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );
        // returns the snapshot of the query, which will be a list
        unsubscribe =  onSnapshot(queryLeaderboards, (snapshot) => {
        let docs = [];
      
        //snapshot is a list of all documents in the collection
        snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id

            docs.push({...data, id});
            
      });
      setLeaderboards(docs);

    })
    } catch (err) {
      console.error(err);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getLeaderboards();
  }, []);
  return { leaderboards};
};
