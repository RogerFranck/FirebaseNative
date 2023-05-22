import { db } from "../db/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export default async function deleteData(id: any, collection: string) {
    await deleteDoc(doc(db, collection, id));
}