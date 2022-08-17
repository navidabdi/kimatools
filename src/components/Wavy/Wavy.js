import ExportPopup from "../ExportPopup";
import Canvas from "./Canvas";
import { svgRefAtom } from "../../atoms/Wavy";
import { useRecoilState } from "recoil";
const Wavy = () => {
  const [svg] = useRecoilState(svgRefAtom);

  const dataExport = {
    title: "Generated Wavy SVG",
    des: "Here are your Wavy SVG! you can download it for free!",
    data: `sv`,
  };

  const download = (href, name) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = name;
    link.style.display = "none";

    link.click();
    link.remove();
  };

  const downloadAsSvg = () => {
    const copySvg = svg.cloneNode(true);
    ["class", "width", "height"].forEach((attr) =>
      copySvg.removeAttribute(attr),
    );

    const file = new Blob([copySvg.outerHTML], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(file);
    download(url, "wave.svg");
  };

  const downloadAsPng = () => {
    const { width, height } = svg.getBBox();
    const blob = new Blob([svg.outerHTML], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = (window.URL || window.webkitURL || window).createObjectURL(
      blob,
    );

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const png = canvas.toDataURL("image/png");
      download(png, "wave.png");
      canvas.remove();
    };
    img.src = url;
  };

  return (
    <div>
      <Canvas />
      <ExportPopup
        title={dataExport.title}
        description={dataExport.des}
        data={<Canvas />}
        downloadAsSvg={downloadAsSvg}
        downloadAsPng={downloadAsPng}
      />
    </div>
  );
};

export default Wavy;
