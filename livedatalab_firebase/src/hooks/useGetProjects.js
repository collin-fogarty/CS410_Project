import { useEffect, useState } from "react";
import { where, query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetProjects = () => {
  const [projects, setProjects] = useState([]);

  const projectCollectionRef = collection(db, "projects");
  const {userID} = useGetUserInfo();
  const getProjects = async () => {
    let unsubscribe
    try {
      const queryProjects = query(
        projectCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );
        // returns the snapshot of the query, which will be a list
        unsubscribe =  onSnapshot(queryProjects, (snapshot) => {
        let docs = [];
      
        //snapshot is a list of all documents in the collection
        snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id

            docs.push({...data, id});
            
      });
      setProjects(docs);

    })
    } catch (err) {
      console.error(err);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getProjects();
  }, []);
  return { projects};
};
