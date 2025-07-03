import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import arrowIcon from "../../assets/icons/arrow-line-down.svg";
import docImage from "../../assets/images/doc.svg";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  countryOfResidence: z.string().min(1, "Country of residence is required"),
  placeOfBirth: z.string().min(1, "Place of birth is required"),
  typeOfSignature: z.string().min(1, "Type of signature is required"),
});

const EditUser = () => {
  const dateInputRef = useRef<HTMLSelectElement | null>(null);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[var(--bg)] w-full min-h-screen py-8 px-4 lg:px-102">
      <div className="flex items-center justify-center flex-col gap-y-3">
        <img
          src="https://picsum.photos/seed/1/40"
          alt="user_image"
          className="rounded-full h-18 w-18"
        />
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Grace Lonely
          </h2>
          <p className="text-sm text-[var(--text-4)]">Date Joined: 2025</p>
        </div>
      </div>

      <div className="border-t border-[var(--border)] my-6">
        <h2 className="text-md text-[var(--text)] font-semibold mt-5 mb-3">
          User's Information
        </h2>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <input
                {...register("fullName")}
                placeholder="Full name"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.fullName && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("emailAddress")}
                placeholder="Email Address"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.emailAddress && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.emailAddress.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("phoneNumber")}
                placeholder="Phone number"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("countryOfResidence")}
                placeholder="country of residence"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.countryOfResidence && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.countryOfResidence.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("placeOfBirth")}
                placeholder="place of birth"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.placeOfBirth && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.placeOfBirth.message}
                </p>
              )}
            </div>
            <div>
              <div className="relative">
                <select
                  {...register("typeOfSignature")}
                  className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm appearance-none"
                  ref={(e) => {
                    register("typeOfSignature").ref(e);
                    dateInputRef.current = e;
                  }}
                >
                  <option value="">Type of signature</option>
                  <option value="digital">Digital</option>
                  <option value="handwritten">Handwritten</option>
                </select>
                <img
                  src={arrowIcon}
                  alt="arrow_down"
                  className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-3)] cursor-pointer"
                  onClick={() => dateInputRef.current?.showPicker()}
                />
              </div>
              {errors.typeOfSignature && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.typeOfSignature.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center flex-col gap-y-2 w-full mt-6 px-4 pb-4 border-t border-[var(--border)] py-6">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-md font-medium text-[var(--text)]">
                  Supporting Documents
                </h3>
                <Link
                  to={`/users/individual/${id}/supporting-docs`}
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
            <button
              type="submit"
              className="w-full p-4 bg-[var(--accent)] text-[var(--text)] rounded-full hover:bg-[var(--bg)]/90 cursor-pointer mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
