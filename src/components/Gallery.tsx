import { useState } from 'react';
import Header from '@/components/Header';
import { ImageType, featureImages } from '@/data/featureImages';
import Image from '@/components/Image';
import { LuImagePlus } from 'react-icons/lu';
import { generateUniqueId } from '@/utils/uniqueId';



const Gallery = () => {
    const [selected, setSelected] = useState<ImageType[]>([]);
    const [images, setImages] = useState<ImageType[]>(featureImages);

    // Remove Selected Images 
    const removeSelected = () => {
        const NonSelected = images.filter(image => !selected.includes(image));
        setImages(NonSelected);
        setSelected([]);
    }

    // Get Selection Image 
    const getSelected = (id: number) => {
        const exits = selected.find((image: ImageType) => image.id === id);
        if (exits) {
            const newSelected = selected.filter(
                (image: ImageType) => image.id !== id,
            );
            setSelected(newSelected);
        } else {
            const findSelectedImage = images.find(
                (image: ImageType) => image.id === id,
            );
            const newSelected = [...selected, findSelectedImage as ImageType];
            setSelected(newSelected);
        }
    };


    // Optional Work: for Upload Multiple Image
    const handleUploadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []) as File[];

        const imageFiles = files.filter((file: Blob) => file.type.startsWith('image/'));

        if (imageFiles.length > 0) {
            const readers = imageFiles.map((file: Blob) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                return reader;
            });

            Promise.all(readers.map(reader => new Promise<string>(resolve => {
                reader.onload = e => resolve(e.target?.result as string);
            })))
                .then(previews => {
                    const formattedImages = previews.map((image: string) => {
                        const id = generateUniqueId();
                        return {
                            id,
                            src: image
                        }
                    })
                    setImages([...images, ...formattedImages])
                });
        }
    }

    return (
        <section className="bg-white rounded-md border  shadow text-slate-700 w-full lg:w-[1000px]  mx-auto ">
            {/* Header Section  */}
            <Header selected={selected.length} removeSelected={removeSelected} />
            {/* main Container  */}
            {images.length === 0 && (
                <p className=" my-3 text-center">No Image Found</p>
            )}
            <div className={`p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ${images.length > 0 ? 'child-width' : null}`}>
                {images.length > 0
                    ? images.map((image: ImageType, index: number) => {
                        return (
                            <Image
                                getSelected={getSelected}
                                image={image}
                                key={index}
                                id={index}
                                selected={selected}
                            />
                        );
                    })
                    : null}
                {/* uploader  */}
                <div className={`${images.length === 0 ? 'row-span-2 col-span-2 md:col-span-3 lg:col-span-5 flex justify-center items-center my-4' : 'col-span-1 row-span-1'}`}>
                    <label
                        htmlFor="uploader"
                        className={`border-dashed cursor-pointer transition-all ease-in-out duration-200 hover:text-slate-600 hover:bg-slate-100 border-2 rounded-md border-slate-300 flex flex-col gap-3 items-center justify-center ${images.length === 0 ? 'w-full md:w-[250px] min-h-[180px]' : 'h-full py-8'}`}
                    >
                        <LuImagePlus size={50} />
                        <p className="text-md font-medium leading-6">Add Image</p>
                        <input
                            onChange={handleUploadImages}
                            multiple
                            type="file" id="uploader" className="hidden" />
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
