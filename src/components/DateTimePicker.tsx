import { type Dispatch, type SetStateAction } from "react";
import ScrollPicker from "./ScrollPicker";
import dayjs from "dayjs";

const generateDates = (): string[] => {
  return Array.from({ length: 30 }, (_, i) =>
    dayjs().add(i, "day").format("ddd D MMM")
  );
};

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);
const meridiems = ["AM", "PM"];

type DateType = {
  setDate: Dispatch<SetStateAction<string>>;
  setHour: Dispatch<SetStateAction<string>>;
  setMinute: Dispatch<SetStateAction<string>>;
  setMeridiem: Dispatch<SetStateAction<string>>;
};

const DateTimePicker = ({
  setDate,
  setHour,
  setMinute,
  setMeridiem,
}: DateType) => {
  return (
    <div className="relative text-[var(--text)] flex flex-col items-center space-y-6">
      <div className="absolute top-7 bg-[var(--card-bg)] w-full max-w-md h-12" />
      <div className="grid grid-cols-4 gap-2 w-full max-w-md">
        <ScrollPicker options={generateDates()} onChange={setDate} />
        <ScrollPicker options={hours} onChange={setHour} />
        <ScrollPicker options={minutes} onChange={setMinute} />
        <ScrollPicker options={meridiems} onChange={setMeridiem} />
      </div>
    </div>
  );
};

export default DateTimePicker;
