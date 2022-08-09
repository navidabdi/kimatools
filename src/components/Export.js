import { useRecoilState } from "recoil";
import { exportBoxShadowAtom } from "../atoms/BoxShadowAtom";

const Export = () => {
  const [showPopup, setShowPopup] = useRecoilState(exportBoxShadowAtom);
  return (
    <div className="sticky z-50 left-0 p-4 bg-white w-full bottom-0 dark-bg-primary dark-text-primary border-t border-primary flex justify-between items-center">
      <h3 className="font-bold">Export</h3>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="bg-third py-1 px-3 rounded"
      >
        Show Code
      </button>
    </div>
  );
};

export default Export;
