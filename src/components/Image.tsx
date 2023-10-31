import { ImageType } from '../data/featureImages';
import { useState } from 'react';
type Props = {
  image: ImageType;
  id: number;
  getSelected: (id: number) => void;
};

const Image = ({ image, id, getSelected }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
    getSelected(image.id);
  };
  return (
    <div
      draggable
      className="overflow-hidden cursor-cell relative border border-slate-300 shadow rounded-md group"
    >
      <img
        src={image.src}
        className="w-full object-cover"
        alt={`image-${id}`}
      />
      <div
        className={`${
          isChecked
            ? 'block bg-opacity-25 bg-slate-200'
            : 'hidden bg-opacity-50'
        } group-hover:block p-4 bg-slate-600 absolute top-0 left-0 bottom-0 right-0`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="w-5 h-5 cursor-pointer text-left block"
        />
      </div>
    </div>
  );
};

export default Image;
