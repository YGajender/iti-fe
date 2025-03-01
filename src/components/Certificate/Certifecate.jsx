import "./Certifecate.css";
import certifecate from "../../assets/certifecate.jpg";
import pdfFile from "../../assets/AFFILIATION.pdf";
import white_arrow from "../../assets/white-arrow.png";

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'pdfFile';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Certifecate = () => {

  return (
    <div className="campus">
      <div className="certifecate">
        <img src={certifecate} alt="certifecate" />
      </div>
      <button className="btn dark-btn" onClick={handleDownload}>
        Apply Now <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Certifecate;
