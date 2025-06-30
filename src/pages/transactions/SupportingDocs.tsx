import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import backIcon from "../../assets/icons/arrow-left.svg";
import docImage from "../../assets/images/doc.svg";

const SupportingDocs = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchTransactionDetails = (id: string) => {
    console.log(id);
  };

  useEffect(() => {
    fetchTransactionDetails(id as string);
  }, [id]);

  return (
    <div className="bg-[var(--bg)] w-full min-h-screen">
      {/* Header */}
      <div className="w-full px-4 lg:px-32 border-b border-[var(--border)] flex items-end justify-start gap-4 h-24 pb-4">
        <img
          src={backIcon}
          alt="arrow_icon"
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h3 className="text-md font-medium">Supporting documents</h3>
      </div>

      {/* Documents */}
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap lg:gap-4 gap-3 overflow-y-auto mt-4 px-10 lg:px-32 pb-4 scrollbar-hidden">
        {[
          "Government-issued ID",
          "Proof of Address",
          "Certificate of Incorporation",
          "Memorandum & Articles of Association",
        ].map((val) => (
          <div
            key={val}
            className="flex-shrink-0 flex items-center justify-between flex-col bg-[var(--card-bg-2)] rounded-xl w-full lg:w-[calc(50%-1rem)] xl:w-[calc(25%-1rem)]"
          >
            <img src={docImage} alt="doc_image" className="p-4 pb-1" />
            <div className="bg-[var(--border)] w-full p-4 grid place-items-center rounded-b-xl">
              <p className="text-sm text-[var(--text)]">{val}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportingDocs;
