import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { type ReactNode, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormFieldProps {
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  icon?: ReactNode;
}

export default function FormField({
  type = "text",
  placeholder = "",
  registration,
  error,
  icon,
}: Readonly<FormFieldProps>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="space-y-1 w-full">
      <div className="flex items-center bg-[#2b2b2b] rounded-full px-6 py-4">
        {icon && <span className="mr-3 text-[var(--accent)]">{icon}</span>}
        <input
          type={isPassword && !showPassword ? "password" : "text"}
          {...registration}
          placeholder={placeholder}
          className="outline-none text-(var(--text-2)) w-full placeholder:text-[var(--text-2)]"
        />
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-10 text-[var(--text-4)] hover:text-[var(--text)] cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>
      {error && <p className="text-(var(--error)) text-sm">{error.message}</p>}
    </div>
  );
}
