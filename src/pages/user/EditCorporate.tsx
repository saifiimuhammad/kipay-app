import { zodResolver } from "@hookform/resolvers/zod";
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as z from "zod";
import { Check } from "lucide-react";
import clsx from "clsx";

import { motion } from "framer-motion";

import arrowIcon from "../../assets/icons/arrow-line-down.svg";
import menuDotIcon from "../../assets/icons/menu-dot.svg";
import docImage from "../../assets/images/doc.svg";

type UserType = {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  imageUrl: string;
};

const userList: UserType[] = [
  {
    id: "4fdf",
    name: "Wade Warren",
    role: "Admin",
    email: "jonet@gmail.com",
    status: "Active",
    imageUrl: "https://picsum.photos/seed/1/40",
  },
  {
    id: "43df",
    name: "Wade Warren",
    role: "Approver",
    email: "jonet@gmail.com",
    status: "Active",
    imageUrl: "https://picsum.photos/seed/1/40",
  },
  {
    id: "4f7f",
    name: "Wade Warren",
    role: "Initiator",
    email: "jonet@gmail.com",
    status: "Active",
    imageUrl: "https://picsum.photos/seed/1/40",
  },
];

const schema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

const EditCorporate = () => {
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="bg-[var(--bg)] w-full min-h-screen py-8 px-4 lg:px-102">
      <Drawer isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} id={userId} />
      <div className="flex items-center justify-center flex-col gap-y-3">
        <img
          src="https://picsum.photos/seed/1/40"
          alt="user_image"
          className="rounded-full h-18 w-18"
        />
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            Steel Mills Karachi Pvt Ltd.
          </h2>
          <p className="text-sm text-[var(--text-4)]">Date Joined: 2025</p>
        </div>
      </div>

      <div className="border-t border-[var(--border)] my-6">
        <h2 className="text-md text-[var(--text)] font-semibold mt-5 mb-3">
          Company's Information
        </h2>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <input
                {...register("companyName")}
                placeholder="Company name"
                className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm"
              />
              {errors.companyName && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.companyName.message}
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
              <div className="relative">
                <input
                  {...register("phoneNumber")}
                  placeholder="Phone number"
                  ref={(e) => {
                    register("phoneNumber").ref(e);
                    dateInputRef.current = e;
                  }}
                  className="w-full p-4 bg-[var(--card-bg)] text-[var(--text)] rounded-md text-sm appearance-none"
                />
                <img
                  src={arrowIcon}
                  alt="arrow_down"
                  className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-3)] cursor-pointer"
                  onClick={() => dateInputRef.current?.showPicker()}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center flex-col gap-y-2 w-full mt-6 px-4 pb-4 border-t border-[var(--border)] py-6">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-md font-medium text-[var(--text)]">
                  Supporting Documents
                </h3>
                <Link
                  to={`/users/corporate/${id}/supporting-docs`}
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
            <div className="user-list">
              {userList.map((val) => (
                <Card
                  key={val.id}
                  id={val.id}
                  name={val.name}
                  email={val.email}
                  status={val.status}
                  role={val.role}
                  imageUrl={val.imageUrl}
                  setIsDialogOpen={setIsDialogOpen}
                  setUserId={setUserId}
                />
              ))}
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

type CardType = {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  imageUrl: string;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setUserId: Dispatch<SetStateAction<string>>;
};

const Card = ({
  id,
  name,
  email,
  role,
  status,
  imageUrl,
  setIsDialogOpen,
  setUserId,
}: CardType) => {
  const handleOnClick = () => {
    setIsDialogOpen(true);
    setUserId(id);
  };

  return (
    <div className="flex items-center justify-between bg-[var(--bg)] text-white px-2 max-[376px]:px-0 py-3 w-full border-b border-[var(--border)] cursor-pointer">
      <div className="flex items-center justify-start w-full">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full mr-1"
        />
        <div className="flex items-start justify-center flex-col mb-2 max-[321px]:mb-0">
          <span className="font-semibold max-[321px]:text-sm">{name}</span>

          <div className="text-[var(--text-3)] text-xs max-[376px]:text-[.6rem] max-[321px]:text-[.55rem] flex items-center justify-center gap-2 max-[321px]:gap-1">
            {role}{" "}
            <hr className="h-[12px] w-[2px] bg-[var(--text-4)] rounded-full" />{" "}
            {email}
          </div>
        </div>
      </div>

      <span
        className={`ml-2 text-[var(--success)] bg-[var(--card-bg)] text-xs px-3 max-[321px]:px-2 py-2 max-[321px]:py-1 mr-1 max-[321px]:mr-0 rounded-xl`}
      >
        {status}
      </span>

      <span className="text-gray-400">
        <img
          src={menuDotIcon}
          alt="arrow_icon"
          className="w-7 h-7"
          onClick={handleOnClick}
        />
      </span>
    </div>
  );
};

const roles = ["Admin", "Manager", "Viewer"] as const;
const signatoryRoles = ["Single", "Joint"] as const;

const formSchema = z.object({
  role: z.enum(roles, {
    required_error: "Select a role",
  }),
  signatoryRole: z.enum(signatoryRoles, {
    required_error: "Select a signatory role",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Drawer = ({
  isOpen,
  setIsOpen,
  id,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}) => {
  const startY = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);
  const [deltaY, setDeltaY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [assignRole, setAssignRole] = useState(false);
  const [assignSignatoryRole, setAssignSignatoryRole] = useState(false);

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "Admin",
      signatoryRole: "Single",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Selected role:", data.role);
  };

  useEffect(() => {
    // Detect mobile
    const check = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(check);
    fetchTransactionDetails();
  }, []);

  const fetchTransactionDetails = () => {
    console.log(id);
  };

  const startDrag = (clientY: number) => {
    startY.current = clientY;
    startTime.current = Date.now();
    setIsDragging(true);
  };

  const moveDrag = (clientY: number) => {
    if (!isDragging || startY.current === null) return;
    setDeltaY(clientY - startY.current);
  };

  const endDrag = () => {
    const time = Date.now() - (startTime.current || 1);
    const velocity = deltaY / time;

    if (velocity > 0.5 || deltaY > 120) {
      setIsOpen(false); // drag down
      setAssignRole(false);
      setAssignSignatoryRole(false);
    } else if (velocity < -0.5 || deltaY < -100) {
      setIsOpen(false);
      setAssignRole(false);
      setAssignSignatoryRole(false);
    }

    setDeltaY(0);
    setIsDragging(false);
    startY.current = null;
    startTime.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    isMobile && startDrag(e.touches[0].clientY);
  const handleTouchMove = (e: React.TouchEvent) =>
    isMobile && moveDrag(e.touches[0].clientY);
  const handleTouchEnd = () => isMobile && endDrag();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return;
    startDrag(e.clientY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e: MouseEvent) => moveDrag(e.clientY);
  const handleMouseUp = () => {
    endDrag();
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setAssignRole(false);
    setAssignSignatoryRole(false);
  };

  const handleOnDelete = () => {};
  const handleOnEdit = () => {
    navigate(`/users/${id}/edit`);
  };
  const handleOnSuspend = () => {};

  useEffect(() => {
    if (!isOpen) setDeltaY(0);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleCloseDialog}
        />
      )}

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? deltaY : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed bottom-0 left-0 right-0 bg-[#2C2C2C] text-white rounded-t-2xl z-50 px-4 lg:px-102 py-4 touch-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } lg:cursor-default`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ touchAction: "none" }}
      >
        <div className="w-12 h-1.5 bg-white/60 rounded-full mx-auto mb-4" />

        {!assignRole && !assignSignatoryRole && (
          <div>
            <div className="border-b-2 border-[var(--border)]">
              <h2 className="text-lg font-semibold mb-4">Manage</h2>
            </div>
            <div className="text-sm text-white/80 flex flex-col items-start justify-center gap-y-5 py-6">
              <button
                className="text-sm text-[var(--text)] font-medium cursor-pointer"
                onClick={() => setAssignRole((prev) => !prev)}
              >
                Assign role
              </button>
              <button
                className="text-sm text-[var(--text)] font-medium cursor-pointer"
                onClick={handleOnEdit}
              >
                Edit user information
              </button>
              <button
                className="text-sm text-[var(--text)] font-medium cursor-pointer"
                onClick={handleOnDelete}
              >
                Remove user
              </button>
              <button
                className="text-sm text-[var(--text)] font-medium cursor-pointer"
                onClick={handleOnSuspend}
              >
                Suspend user
              </button>
              <button
                className="text-sm text-[var(--text)] font-medium cursor-pointer"
                onClick={() => setAssignSignatoryRole((prev) => !prev)}
              >
                Assign Signatory roles
              </button>
              <button
                className="text-sm text-[var(--text)] font-medium cursor-pointer"
                onClick={handleOnEdit}
              >
                Access user activities
              </button>
            </div>
          </div>
        )}

        {(assignRole || assignSignatoryRole) && (
          <div>
            <div className="border-b-2 border-[var(--border)]">
              <h2 className="text-lg font-semibold mb-4">Assign Role</h2>
            </div>
            <div className="text-sm text-white/80 flex flex-col items-start justify-center gap-y-5 py-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full mx-auto text-white"
              >
                {assignRole && (
                  <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-4">
                        {roles.map((role) => {
                          const isSelected = field.value === role;
                          return (
                            <div
                              key={role}
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => field.onChange(role)}
                            >
                              <span>{role}</span>
                              <span
                                className={clsx(
                                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                  isSelected
                                    ? "border-green-500 bg-[var(--success)]"
                                    : "border-[var(--text-4)]"
                                )}
                              >
                                {isSelected ? (
                                  <Check className="w-3 h-3 text-white" />
                                ) : (
                                  <Check className="w-3 h-3 text-[var(--text-3)]" />
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  />
                )}
                {assignSignatoryRole && (
                  <Controller
                    name="signatoryRole"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-4">
                        {signatoryRoles.map((signatoryRole) => {
                          const isSelected = field.value === signatoryRole;
                          return (
                            <div
                              key={signatoryRole}
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => field.onChange(signatoryRole)}
                            >
                              <span>{signatoryRole}</span>
                              <span
                                className={clsx(
                                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                  isSelected
                                    ? "border-green-500 bg-[var(--success)]"
                                    : "border-[var(--text-4)]"
                                )}
                              >
                                {isSelected ? (
                                  <Check className="w-3 h-3 text-white" />
                                ) : (
                                  <Check className="w-3 h-3 text-[var(--text-3)]" />
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  />
                )}
              </form>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default EditCorporate;
