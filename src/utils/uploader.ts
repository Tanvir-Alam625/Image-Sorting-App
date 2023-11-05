// import {useState} from "react";
// export const uploader = (files: Blod[]) => {
//     const [newImages, setNewImages] = useState([])


//     const imageFiles = files.filter((file: Blob) => file.type.startsWith('image/'));


//         if (imageFiles.length > 0) {
//             const readers = imageFiles.map((file: Blob) => {
//                 const reader = new FileReader();
//                 reader.readAsDataURL(file);
//                 return reader;
//             });

//             Promise.all(readers.map(reader => new Promise<string>(resolve => {
//                 reader.onload = e => resolve(e.target?.result as string);
//             })))
//                 .then(previews => {
//                     const formattedImages = previews.map((image: string) => {
//                         const id = generateUniqueId();
//                         return {
//                             id,
//                             src: image
//                         }
//                     })
//                     setImages([...images, ...formattedImages])
//                 });
//         }
// }