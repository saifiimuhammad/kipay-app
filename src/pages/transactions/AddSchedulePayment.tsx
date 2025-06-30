import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useNavigate } from "react-router-dom";

import backIcon from "../../assets/icons/arrow-left.svg";
import arrowIcon from "../../assets/icons/arrow-line-down.svg";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  recipientName: z.string().min(1, "Recipient name is required"),
  bankName: z.string().min(1, "Bank is required"),
  paymentDate: z.string().min(1, "Date is required"),
  incoterm: z.string().min(1, "Incoterm is required"),
  shipmentStatus: z.string().min(1, "Shipment status is required"),
});

type FormData = z.infer<typeof formSchema>;

const banks = ["HBL", "UBL", "Meezan Bank", "MCB", "Bank Alfalah"];
const incoterms = ["FOB", "CIF", "EXW", "DDP"];
const shipmentStatuses = ["In transit", "Delivered", "Pending", "Canceled"];

export default function AddSchedulePayment() {
  const navigate = useNavigate();
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* Top */}
      <div className="w-full h-24 flex items-end justify-start gap-4 px-4 lg:px-32 border-b border-[var(--border)] pb-4">
        <img
          src={backIcon}
          alt="arrow_icon"
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h2 className="text-md font-medium text-[var(--text)]">
          Add schedule payments
        </h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 lg:px-102"
      >
        {/* Recipient Section */}
        <div className="border-b border-[var(--border)] pb-5">
          <h3 className="block mb-2 text-[var(--text)] text-semibold">
            Recipient details
          </h3>

          <input
            {...register("amount")}
            placeholder="Amount"
            className="w-full p-4 bg-[var(--card-bg)] rounded placeholder-[var(--text-3)] text-sm"
          />
          {errors.amount && (
            <p className="text-red-500 text-sm">{errors.amount.message}</p>
          )}

          <input
            {...register("recipientName")}
            placeholder="Recipient name"
            className="w-full p-4 bg-[var(--card-bg)] mt-2 rounded placeholder-[var(--text-3)] text-sm"
          />
          {errors.recipientName && (
            <p className="text-red-500 text-sm">
              {errors.recipientName.message}
            </p>
          )}

          <div className="relative mt-2">
            <select
              {...register("bankName")}
              className="w-full p-4 pr-10 bg-[var(--card-bg)] rounded text-sm appearance-none"
            >
              <option value="">Bank name</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
            <img
              src={arrowIcon}
              alt="arrow_down"
              className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-3)] pointer-events-none"
            />
          </div>
          {errors.bankName && (
            <p className="text-red-500 text-sm">{errors.bankName.message}</p>
          )}
        </div>

        {/* Payment Date Section */}
        <div className="border-b border-[var(--border)] pb-5">
          <h3 className="block mb-2 text-[var(--text)] text-semibold">
            Date of payment
          </h3>
          <div className="relative">
            <input
              type="date"
              {...register("paymentDate")}
              ref={(e) => {
                register("paymentDate").ref(e);
                dateInputRef.current = e;
              }}
              className="w-full p-4 pr-10 bg-[var(--card-bg)] rounded text-sm appearance-none"
            />

            <img
              src={arrowIcon}
              alt="arrow_down"
              className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-3)] cursor-pointer"
              onClick={() => dateInputRef.current?.showPicker()}
            />
          </div>
          {errors.paymentDate && (
            <p className="text-red-500 text-sm">{errors.paymentDate.message}</p>
          )}
        </div>

        {/* Condition of Payment Section */}
        <div>
          <h3 className="block mb-2 text-[var(--text)] text-semibold">
            Condition of payment
          </h3>

          <div className="mt-3">
            <label htmlFor="incoterm" className="text-sm text-[var(--text-3)]">
              Based on Incoterm
            </label>
            <div className="relative mt-2">
              <select
                {...register("incoterm")}
                className="w-full p-4 pr-10 bg-[var(--card-bg)] rounded text-sm appearance-none"
              >
                <option value="">Choose term</option>
                {incoterms.map((term) => (
                  <option key={term} value={term}>
                    {term}
                  </option>
                ))}
              </select>

              <img
                src={arrowIcon}
                alt="arrow_down"
                className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-3)] pointer-events-none"
              />
            </div>
            {errors.incoterm && (
              <p className="text-red-500 text-sm">{errors.incoterm.message}</p>
            )}
          </div>

          <div className="mt-3">
            <label
              htmlFor="shipmentStatus"
              className="text-sm text-[var(--text-3)]"
            >
              Shipment status
            </label>
            <div className="relative mt-2">
              <select
                {...register("shipmentStatus")}
                className="w-full p-4 pr-10 bg-[var(--card-bg)] rounded text-sm appearance-none"
              >
                <option value="">Choose status</option>
                {shipmentStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <img
                src={arrowIcon}
                alt="arrow_down"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-3)] pointer-events-none"
              />
            </div>
            {errors.shipmentStatus && (
              <p className="text-red-500 text-sm">
                {errors.shipmentStatus.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 bg-[var(--accent)] text-[var(--text)] rounded-full my-2 cursor-pointer hover:bg-[var(--accent)]/90"
        >
          Save
        </button>
      </form>
    </div>
  );
}
