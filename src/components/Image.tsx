import { ImageType } from '../data/featureImages';
type Props = {
  image: ImageType;
};

const Image = ({ image }: Props) => {
  return (
    <div
      draggable
      className=" overflow-hidden border border-slate-300 shadow rounded-md"
    >
      <img
        src={image.src}
        className="w-full object-cover"
        alt={`image-${image.id}`}
      />
    </div>
  );
};

export default Image;
