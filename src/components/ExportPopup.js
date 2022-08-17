import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { exportBoxShadowAtom } from "../atoms/BoxShadowAtom";

const ExportPopup = ({
  title,
  description,
  data,
  downloadAsSvg = null,
  downloadAsPng = null,
}) => {
  const [showPopup, setShowPopup] = useRecoilState(exportBoxShadowAtom);
  const [copyTriger, setCopyTriger] = useState(false);

  return (
    <div
      className={`${
        showPopup === true
          ? "scale-100 pointer-events-auto"
          : "scale-0 pointer-events-none"
      } absolute left-0 top-0 w-full h-full flex justify-center items-center transition-all duration-300 z-[999]`}
    >
      <div
        onClick={() => setShowPopup(false)}
        className="w-full h-full absolute left-0 top-0 bg-black/50 z-[51]"
      ></div>
      <div
        className={`${
          copyTriger ? "translate-y-0" : "translate-y-[100px]"
        } font-bold text-secondery flex justify-between absolute left-[50%] z-[52] top-[180px] rounded-full translate-x-[-50%]  bg-primary py-3 px-6 transition-all bg-white dark-bg-primary`}
      >
        <p>Copeid!</p>
        <CheckIcon className="w-6 h-6 ml-3" />
      </div>
      <div className="w-[350px] min-h-[350px] md:w-[700px] md:min-h-[400px] bg-white z-[52] dark-text-primary dark-bg-primary rounded-2xl p-4">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="bg-gray-100 dark-bg-foure rounded-2xl overflow-hidden p-3 mt-4 min-h-[220px] md:min-h-[400px] relative">
          {data}
          <button
            onClick={() => {
              navigator.clipboard.writeText(data);
              setCopyTriger(true);
              setTimeout(() => {
                setCopyTriger(false);
              }, 1000);
            }}
            className="absolute bottom-2 right-2 p-2 cursor-pointer bg-third rounded opacity-40 dark:opacity-70 transition-all hover:opacity-100"
          >
            <DocumentDuplicateIcon className="w-7 h-7 dark-text-primary" />
          </button>
        </div>
        <div className="mt-5 flex justify-center items-center">
          {downloadAsSvg ? (
            <button
              onClick={downloadAsSvg}
              className="px-8 py-3 rounded-full bg-main mr-3"
            >
              SVG
            </button>
          ) : (
            ""
          )}
          {downloadAsPng ? (
            <button
              onClick={downloadAsPng}
              className="px-8 py-3 rounded-full bg-main"
            >
              PNG
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportPopup;
