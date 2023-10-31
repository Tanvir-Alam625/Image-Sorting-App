import { BsCheckSquareFill } from 'react-icons/bs';

type Props = {
  selected: number[];
};

const Header = ({ selected }: Props) => {
  return (
    <div className="pt-3 px-3 pb-1 border-b border-slate-300">
      {selected.length === 0 ? (
        <h1 className="text-2xl font-medium text-left text-slate-800">
          Gallery
        </h1>
      ) : null}
      {selected.length ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 inline-block text-xl">
              <BsCheckSquareFill className="inline" />
            </span>
            <h2 className="text-xl font-medium text-left text-slate-800">
              {selected.length > 2
                ? `${selected.length} Files`
                : `${selected.length} File`}{' '}
              selected
            </h2>
          </div>
          <button className="reset-btn text-xl font-medium text-left text-red-600">
            Delete {selected.length > 2 ? 'files' : 'file'}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
