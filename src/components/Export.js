import { useSetRecoilState } from "recoil";
import { exportBoxShadowAtom } from "../atoms/BoxShadowAtom";
import { ReactComponent as Random } from "../assets/svg/random.svg";

const Export = ({ title = "Show Code", randomize = null }) => {
  const setShowPopup = useSetRecoilState(exportBoxShadowAtom);
  return (
    <div className="sticky z-50 left-0 p-4 bg-white w-full bottom-0 dark-bg-primary dark-text-primary border-t border-primary">
      <h3 className="font-bold mb-3">Export</h3>
      <div className="flex justify-between items-center">
        {randomize ? (
          <button onClick={randomize} className=" p-3 bg-main rounded-full">
            <Random className="fill-current w-7 h-7" />
          </button>
        ) : (
          ""
        )}

        <button
          onClick={() => setShowPopup(true)}
          className="bg-main py-3 px-7 rounded-full"
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Export;
