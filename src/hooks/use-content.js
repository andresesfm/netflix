import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

const useContent = (target) => {
    const [content, setContent] = useState([]);
    const { firestore } = useContext(FirebaseContext);
    useEffect(() => {
        firestore
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(), docId: contentObj.id
                }))
                setContent(allContent)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);
    return { [target]: content }
};

export default useContent;
