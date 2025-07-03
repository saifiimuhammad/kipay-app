import supportIcon from "../assets/icons/support.svg";
import phoneIcon from "../assets/icons/call.svg";
import mailIcon from "../assets/icons/mail.svg";
import arrowIcon from "../assets/icons/arrow-right.svg";

const Support = () => {
  const handlePhoneSupport = () => {
    console.log("phone support");
  };

  const handleEmailSupport = () => {
    console.log("email support");
  };

  return (
    <div className="bg-[var(--bg)] w-full min-h-screen px-4 lg:px-102">
      {/* top */}
      <div className="flex items-center justify-center flex-col gap-4 pt-12 pb-8">
        <div className="grid place-items-center bg-[var(--accent)] p-4 rounded-full">
          <img src={supportIcon} alt="support_icon" />
        </div>
        <div className="flex items-center justify-center flex-col gap-1">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Need help?
          </h2>
          <p className="text-sm text-[var(--text-4)] text-center w-[70%]">
            Contact our support via phone and email
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="card-container flex flex-col gap-4">
        <div className="card p-4 w-full bg-[var(--card-bg)] rounded-xl">
          <div className="w-full flex items-center justify-start gap-2 border-b-2 border-[var(--border)] pb-4">
            <img src={phoneIcon} alt="phone_icon" />
            <h3 className="text-[var(--text)] font-medium">Phone support</h3>
          </div>
          <div className="">
            <button
              className="flex items-center gap-2 text-xs text-[var(--accent)] pt-4 cursor-pointer"
              onClick={handlePhoneSupport}
            >
              Tap to make a call <img src={arrowIcon} alt="arrow_icon" />
            </button>
          </div>
        </div>
        <div className="divider flex items-center justify-center gap-6">
          <hr className="w-full h-[1px] bg-[var(--border)] border-none" />
          <span className="text-sm text-[var(--text)]">OR</span>
          <hr className="w-full h-[1px] bg-[var(--border)] border-none" />
        </div>
        <div className="card p-4 w-full bg-[var(--card-bg)] rounded-xl">
          <div className="w-full flex items-center justify-start gap-2 border-b-2 border-[var(--border)] pb-4">
            <img src={mailIcon} alt="mail_icon" />
            <h3 className="text-[var(--text)] font-medium">Email support</h3>
          </div>
          <div className="">
            <button
              className="flex items-center gap-2 text-xs text-[var(--accent)] pt-4 cursor-pointer"
              onClick={handleEmailSupport}
            >
              Tap to open mail client <img src={arrowIcon} alt="arrow_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
