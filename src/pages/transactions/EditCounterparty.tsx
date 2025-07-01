import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import backIcon from "../../assets/icons/arrow-left.svg";

const formSchema = z.object({
  counterpartyName: z.string().min(1, "Required counterparty name"),
  bankName: z.string().min(1, "Required bank name"),
  accountNumber: z.string().min(1, "Required account number"),
  swiftCode: z.string().min(1, "Required swift code"),
  entityType: z.string().min(1, "Required entity type"),
  verificationNotes: z.string().min(1, "Required verification notes"),
  assignedReviewer: z.string().min(1, "Required assigned reviewer"),
});

type FormData = z.infer<typeof formSchema>;

const EditCounterparty = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-[var(--bg)] w-full min-h-screen">
      <div className="nav w-full px-4 lg:px-32 border-b border-[var(--border)] flex items-end justify-start gap-4 h-24 pb-4">
        <img
          src={backIcon}
          alt="arrow_icon"
          className="col-span-1 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h3 className="text-md font-medium col-span-11 text-[var(--text)]">
          Edit counterparty
        </h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 px-4 py-5 lg:px-102"
      >
        <div className="border-b border-[var(--border)] pb-3">
          <h2 className="text-[var(--text)] text-md font-medium mb-2">
            Counterparty’s Information
          </h2>
          <div className="space-y-2 py-2">
            <div>
              <input
                {...register("counterpartyName")}
                placeholder="Name of counterparty"
                className="w-full bg-[var(--card-bg)] text-white p-4 rounded placeholder-gray-400 text-sm"
              />
              {errors.counterpartyName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.counterpartyName.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("bankName")}
                placeholder="Bank name"
                className="w-full bg-[var(--card-bg)] text-white p-4 rounded placeholder-gray-400 text-sm"
              />
              {errors.bankName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.bankName.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("accountNumber")}
                placeholder="Account number"
                className="w-full bg-[var(--card-bg)] text-white p-4 rounded placeholder-gray-400 text-sm"
              />
              {errors.accountNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.accountNumber.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("swiftCode")}
                placeholder="SWIFT code"
                className="w-full bg-[var(--card-bg)] text-white p-4 rounded placeholder-gray-400 text-sm"
              />
              {errors.swiftCode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.swiftCode.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[var(--text)] text-md font-medium mb-2">
            Internal review
          </h2>
          <div className="space-y-2 py-2">
            <div>
              <input
                {...register("entityType")}
                placeholder="Entity type"
                className="w-full bg-[var(--card-bg)] text-white p-4 rounded placeholder-gray-400 text-sm"
              />
              {errors.entityType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.entityType.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register("verificationNotes")}
                placeholder="Verification notes"
                className="w-full bg-[var(--card-bg)] text-white p-4 rounded placeholder-gray-400 text-sm h-20 resize-none"
              />
              {errors.verificationNotes && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.verificationNotes.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("assignedReviewer")}
                placeholder="Assigned reviewer"
                className="w-full bg-[var(--card-bg)] text-white p-4 rounded placeholder-gray-400 text-sm"
              />
              {errors.assignedReviewer && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.assignedReviewer.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--accent)] text-[var(--text)] py-4 rounded-full text-sm font-semibold hover:bg-[var(--accent)]/90"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCounterparty;
