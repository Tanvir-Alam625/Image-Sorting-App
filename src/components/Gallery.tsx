import { useState } from 'react';
import Header from '@/components/Header';
import { ImageType, featureImages } from '@/data/featureImages';
import Image from '@/components/Image';
import { LuImagePlus } from 'react-icons/lu';

const Gallery = () => {
    const [selected, setSelected] = useState<ImageType[]>([]);
    const [images] = useState<ImageType[]>(featureImages);

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

    //   const removeSelected = () => {

    //   }

    return (
        <section className="bg-white rounded-md border  shadow text-slate-700 w-full lg:w-[1000px]  mx-auto ">
            {/* Header Section  */}
            <Header selected={selected.length} />
            {/* main Container  */}
            {images.length === 0 && (
                <p className=" my-3 text-center">No Image Found</p>
            )}
            <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 child-width">
                {images.length > 0
                    ? images.map((image: ImageType, index: number) => {
                        return (
                            <Image
                                getSelected={getSelected}
                                image={image}
                                key={index}
                                id={index}
                            />
                        );
                    })
                    : null}
                {/* uploader  */}
                <label
                    htmlFor="uploader"
                    className="border-dashed cursor-pointer transition-all ease-in-out duration-200 hover:text-slate-600 hover:bg-slate-100 border-2 rounded-md border-slate-300 flex flex-col gap-3 items-center justify-center"
                >
                    <LuImagePlus size={50} />
                    <p className="text-md font-medium leading-6">Add Image</p>
                    <input type="file" id="uploader" className="hidden" />
                </label>
            </div>
        </section>
    );
};

export default Gallery;
