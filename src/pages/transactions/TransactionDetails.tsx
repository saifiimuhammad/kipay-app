import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import backIcon from "../../assets/icons/arrow-left.svg";
import docImage from "../../assets/images/doc.svg";

const TransactionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchTransactionDetails = (id: string) => {
    // You hav eto fetch the data by id receiving as params
    console.log(id);
  };

  useEffect(() => {
    fetchTransactionDetails(id as string);
  });

  return (
    <div className="bg-[var(--bg)] w-full h-full">
      <div className="nav w-full px-4 lg:px-32 border-b border-[var(--border)] flex items-end justify-start gap-4 h-24 pb-4">
        <img
          src={backIcon}
          alt="arrow_icon"
          className="col-span-1 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h3 className="text-md font-medium col-span-11">Transaction details</h3>
      </div>

      <div className="grid grid-cols-1 grid-rows-6 px-4 lg:px-32 mt-4 gap-2">
        <h3 className="row-span-1 text-md font-medium">Transaction details</h3>
        <div className="row-span-5 grid grid-cols-2 h-max px-4 py-6 bg-[var(--card-bg-2)] rounded-xl">
          <div className="flex items-start justify-center flex-col gap-y-3 text-sm text-[var(--text-3)]">
            <span>Transaction ID</span>
            <span>Amount</span>
            <span>Initiated by</span>
            <span>Date initiated</span>
            <span>Comment</span>
          </div>
          <div className="flex items-end justify-center flex-col gap-y-2">
            <span>HE43FEF6E</span>
            <span>$40,000</span>
            <span>Grace</span>
            <span>10-06-2025</span>
            <span>Fueling</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-6 px-4 lg:px-32 mt-4 gap-3">
        <h3 className="row-span-1 text-md font-medium">Recipient’s details</h3>
        <div className="row-span-5 grid grid-cols-2 h-max px-4 py-6 bg-[var(--card-bg-2)] rounded-xl">
          <div className="flex items-start justify-center flex-col gap-y-3 text-sm text-[var(--text-3)]">
            <span>Name</span>
            <span>Email address</span>
            <span>Bank Name</span>
            <span>Swift code</span>
            <span>IBAN</span>
          </div>
          <div className="flex items-end justify-center flex-col gap-y-2">
            <span>John Kimo</span>
            <span>Johnnykimo@gmail.com</span>
            <span>Wetty Bank plc</span>
            <span>12456789012</span>
            <span>12345678901</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-y-2 w-full mt-4 px-4 lg:px-32 pb-4">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-md font-medium text-[var(--text)]">
            Supporting Documents
          </h3>
          <Link
            to={`/pending-validation/${id}/supporting-docs`}
            className="text-sm text-[var(--accent)] font-medium"
          >
            See all
          </Link>
        </div>
        <div className="flex gap-3 w-full overflow-x-auto scrollbar-hide">
          {[
            "Government-issued ID",
            "Proof of Address",
            "Certificate of Incorporation",
            "Memorandum & Articles of Association",
          ].map((val) => (
            <div
              key={val}
              className="flex-shrink-0 flex items-center justify-between flex-col bg-[var(--card-bg-2)] rounded-xl w-54"
            >
              <img src={docImage} alt="doc_image" className="p-4 pb-1" />
              <div className="bg-[var(--border)] w-full p-4 grid place-items-center rounded-b-xl">
                <p className="text-sm text-[var(--text)]">{val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
