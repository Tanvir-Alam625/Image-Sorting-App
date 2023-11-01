import { BsCheckSquareFill } from 'react-icons/bs';

type Props = {
  selected: number;
  removeSelected: () => void;
};

const Header = ({ selected, removeSelected }: Props) => {
  return (
    <div className="pt-3 px-3 pb-1 border-b border-slate-300">
      {selected === 0 ? (
        <h1 className=" text-xl md:text-2xl font-medium text-left text-slate-800">
          Gallery
        </h1>
      ) : null}
      {selected ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 inline-block text-sm md:text-xl">
              <BsCheckSquareFill className="inline" />
            </span>
            <h2 className="text-sm md:text-xl font-medium text-left text-slate-800">
              {selected > 2 ? `${selected} Files` : `${selected} File`} selected
            </h2>
          </div>
          <button onClick={removeSelected} className="reset-btn cursor-pointer text-sm md:text-xl font-medium text-left text-red-600">
            Delete {selected > 2 ? 'files' : 'file'}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
