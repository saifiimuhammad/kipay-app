import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import arrowIcon from "../../assets/icons/arrow-line-down.svg";
import DateTimePicker from "../../components/DateTimePicker";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Message body is required"),
  recipient: z.string().min(1, "Recipient type is required"),
  isActive: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const AddNotification = () => {
  const [toggle, setToggle] = useState(false);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [meridiem, setMeridiem] = useState("");

  const dateInputRef = useRef<HTMLSelectElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      recipient: "",
      isActive: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(date, hour, minute, meridiem);
    console.log({ ...data, isActive: toggle });
  };

  return (
    <div className="bg-[var(--bg)] w-full min-h-screen px-4 lg:px-102">
      <form onSubmit={handleSubmit(onSubmit)} className="py-8 space-y-4">
        <input
          {...register("title")}
          placeholder="Notification title"
          className="w-full bg-[var(--card-bg)] text-white p-3 rounded placeholder-gray-400 text-sm"
        />
        {errors.title && (
          <p className="text-red-500 text-xs">{errors.title.message}</p>
        )}

        <textarea
          {...register("body")}
          placeholder="Message body"
          className="w-full bg-[var(--card-bg)] text-white p-3 rounded placeholder-gray-400 text-sm h-24 resize-none"
        />
        {errors.body && (
          <p className="text-red-500 text-xs">{errors.body.message}</p>
        )}

        <div className="relative">
          <select
            {...register("recipient")}
            ref={(e) => {
              register("recipient").ref(e);
              dateInputRef.current = e;
            }}
            className="w-full bg-[var(--card-bg)] text-white p-3 rounded text-sm appearance-none"
          >
            <option value="">Recipient type</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <img
            src={arrowIcon}
            alt="arrow_down"
            className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-3)] cursor-pointer"
            onClick={() => dateInputRef.current?.showPicker()}
          />
        </div>

        {errors.recipient && (
          <p className="text-red-500 text-xs">{errors.recipient.message}</p>
        )}

        {/* Toggle Button */}
        <div className="flex items-center justify-between pt-2 pb-6 border-b border-[var(--border)]">
          <h3 className="text-sm font-medium text-[var(--text)]">
            Schedule payment
          </h3>
          <div
            onClick={() => setToggle(!toggle)}
            className={`w-10 h-5 rounded-full cursor-pointer transition-colors duration-200 ${
              toggle ? "bg-[var(--accent)]" : "bg-gray-400"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                toggle ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>

        {toggle && (
          <DateTimePicker
            setDate={setDate}
            setHour={setHour}
            setMinute={setMinute}
            setMeridiem={setMeridiem}
          />
        )}

        <button
          type="submit"
          className="w-full bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--text)] p-4 rounded-full text-sm font-medium mt-2"
        >
          Post notification
        </button>
      </form>
    </div>
  );
};

export default AddNotification;
