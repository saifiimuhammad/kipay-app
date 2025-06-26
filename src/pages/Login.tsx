import logoImage from "../assets/images/kipay-logo.png";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../components/FormField";
import { Mail, Lock } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Call your login API here
  };

  return (
    <div className="w-full h-screen bg-[var(--bg)] flex items-center justify-between flex-col">
      <div className="top w-full flex items-center justify-center flex-col gap-y-4">
        <img
          src={logoImage}
          alt="kipay_logo"
          className="logo h-auto w-[250px]"
        />
        <div className="login-content w-full flex items-center justify-center flex-col gap-y-2">
          <h1 className="login-title text-4xl text-[var(--text)] font-bold">
            Welcome back
          </h1>
          <h3 className="login-subtitle text-xl">Enter your details below</h3>
        </div>

        {/* Login form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 max-w-sm w-full px-4"
        >
          <FormField
            type="email"
            placeholder="Email Address"
            registration={register("email")}
            error={errors.email}
            icon={<Mail size={20} />}
          />

          <FormField
            type="password"
            placeholder="Password"
            registration={register("password")}
            error={errors.password}
            icon={<Lock size={20} />}
          />

          <button
            type="submit"
            className="bg-[var(--accent)] text-[var(--text)] text-lg font-semibold w-full py-4 rounded-full"
          >
            Sign in
          </button>
        </form>
      </div>
      <div className="bottom w-full flex items-center justify-center flex-col gap-y-2 pb-8">
        <h3 className="login-subtitle text-lg text-[var(--text-3)]">
          Don't have an account?{" "}
          <a href="/register" className="text-[var(--text)] font-semibold">
            Sign in
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Login;
