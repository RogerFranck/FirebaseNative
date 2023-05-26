import { db } from "../../db/firebaseConfig";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

export default async function postData(body: object, collectionName: string) {
  const { id }: any = body;
  if (!id) {
    await addDoc(collection(db, collectionName), body);
  } else {
    await setDoc(doc(db, collectionName, id), body);
  }
}
