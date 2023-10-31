import { useState } from 'react';
import Header from '@/components/Header';
import { ImageType, featureImages } from '@/data/featureImages';
import Image from '@/components/Image';

const Gallery = () => {
  const [selected] = useState([]);
  const [images] = useState<ImageType[]>(featureImages);

  return (
    <section className="bg-white rounded-md border  shadow text-slate-700 w-full lg:w-[1000px]  mx-auto ">
      {/* Header Section  */}
      <Header selected={selected} />
      {/* main Container  */}
      {images.length === 0 && (
        <p className=" my-3 text-center">No Image Found</p>
      )}
      <div className="p-4 grid grid-cols-5 gap-4 child-width">
        {images.length > 0
          ? images.map((image: ImageType, index: number) => {
              return <Image image={image} key={index} />;
            })
          : null}
      </div>
    </section>
  );
};

export default Gallery;
