import { ImageType } from '../data/featureImages';
import { useState, useEffect } from 'react';
type Props = {
    image: ImageType;
    id: number;
    selected: ImageType[];
    getSelected: (id: number) => void;
    index: number

};

const Image = ({ image, id, getSelected, selected }: Props) => {
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        const findSelectedItem = selected.find((item: ImageType) => {
            return item.id === image.id
        })
        if (findSelectedItem) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
        // setIsChecked(selectCount > 0 ? true : false);
    }, [selected.length, selected, image]);
    const handleCheck = () => {
        // setIsChecked(!isChecked);
        getSelected(image.id);
    };

    return (
        <div
            draggable
            className="overflow-hidden cursor-cell relative border border-slate-300  rounded-md group"
        >
            <img
                src={image.src}
                alt={`image-${id}`}
            />
            <div
                className={`${isChecked
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
