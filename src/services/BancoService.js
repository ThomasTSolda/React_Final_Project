import { db } from '../services/FirebaseConnect'
import { collection, addDoc, doc, getDocs, query, deleteDoc } from "firebase/firestore";

export function salvarDuvidas(dados) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(dados)
            const docRef = await addDoc(collection(db, "/duvidas"), dados);
            resolve(docRef.id)
        } catch (e) {
            reject(e)
        }
    })
}

export function pegarDuvidas() {
    return new Promise(async (resolve, reject) => {
        //, where("capital", "==", true)
        try {
            const q = query(collection(db, "duvidas"));
            const querySnapshot = await getDocs(q);
            let resultados = []
            querySnapshot.forEach((doc) => {
                let objeto = {
                    id: doc.id,
                    ...doc.data()
                }
                resultados.push(objeto)
            });
            resolve(resultados)
        } catch (error) {
            reject(error)
        }

    })
}


export function deleteDuvidas(id) {
    return new Promise(async (resolve, reject) => {
        try {
            await deleteDoc(doc(db, "duvidas", id))
            resolve()
        } catch (error) {
            reject(error)
        }

    })

}