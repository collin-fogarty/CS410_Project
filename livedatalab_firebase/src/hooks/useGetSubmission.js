import { useEffect, useState } from "react";
import { where, query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  const submissionCollectionRef = collection(db, "submissions");
  const {userID} = useGetUserInfo();
  const getSubmissions = async () => {
    let unsubscribe
    try {
      const querySubmissions = query(
        submissionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );
        // returns the snapshot of the query, which will be a list
        unsubscribe =  onSnapshot(querySubmissions, (snapshot) => {
        let docs = [];
      
        //snapshot is a list of all documents in the collection
        snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id

            docs.push({...data, id});
            
      });
      setSubmissions(docs);

    })
    } catch (err) {
      console.error(err);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getSubmissions();
  }, );
  return { submissions};
};
