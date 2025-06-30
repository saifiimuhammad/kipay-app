export type TransactionStatus = "Completed" | "Pending" | "Rejected";

export interface Transaction {
  id: string;
  date: string;
  company: string;
  amount: number;
  approvalType: "Single signature" | "Joint signature";
  signaturesRequired?: string;
  status: TransactionStatus;
}

export const transactions: Transaction[] = [
  {
    id: "TXN-02834",
    date: "29/04/25",
    company: "ABC Corp.",
    amount: 8900,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02835",
    date: "30/04/25",
    company: "XYZ Ltd.",
    amount: 7500,
    approvalType: "Joint signature",
    signaturesRequired: "1 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02836",
    date: "01/05/25",
    company: "PQR Inc.",
    amount: 12000,
    approvalType: "Single signature",
    status: "Rejected",
  },
  {
    id: "TXN-02837",
    date: "02/05/25",
    company: "MNO Corp.",
    amount: 6500,
    approvalType: "Joint signature",
    signaturesRequired: "0 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02838",
    date: "03/05/25",
    company: "JKL Ltd.",
    amount: 9800,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02834",
    date: "29/04/25",
    company: "ABC Corp.",
    amount: 8900,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02835",
    date: "30/04/25",
    company: "XYZ Ltd.",
    amount: 7500,
    approvalType: "Joint signature",
    signaturesRequired: "1 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02836",
    date: "01/05/25",
    company: "PQR Inc.",
    amount: 12000,
    approvalType: "Single signature",
    status: "Rejected",
  },
  {
    id: "TXN-02837",
    date: "02/05/25",
    company: "MNO Corp.",
    amount: 6500,
    approvalType: "Joint signature",
    signaturesRequired: "0 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02838",
    date: "03/05/25",
    company: "JKL Ltd.",
    amount: 9800,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02834",
    date: "29/04/25",
    company: "ABC Corp.",
    amount: 8900,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02835",
    date: "30/04/25",
    company: "XYZ Ltd.",
    amount: 7500,
    approvalType: "Joint signature",
    signaturesRequired: "1 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02836",
    date: "01/05/25",
    company: "PQR Inc.",
    amount: 12000,
    approvalType: "Single signature",
    status: "Rejected",
  },
  {
    id: "TXN-02837",
    date: "02/05/25",
    company: "MNO Corp.",
    amount: 6500,
    approvalType: "Joint signature",
    signaturesRequired: "0 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02838",
    date: "03/05/25",
    company: "JKL Ltd.",
    amount: 9800,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02834",
    date: "29/04/25",
    company: "ABC Corp.",
    amount: 8900,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02835",
    date: "30/04/25",
    company: "XYZ Ltd.",
    amount: 7500,
    approvalType: "Joint signature",
    signaturesRequired: "1 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02836",
    date: "01/05/25",
    company: "PQR Inc.",
    amount: 12000,
    approvalType: "Single signature",
    status: "Rejected",
  },
  {
    id: "TXN-02837",
    date: "02/05/25",
    company: "MNO Corp.",
    amount: 6500,
    approvalType: "Joint signature",
    signaturesRequired: "0 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02838",
    date: "03/05/25",
    company: "JKL Ltd.",
    amount: 9800,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02834",
    date: "29/04/25",
    company: "ABC Corp.",
    amount: 8900,
    approvalType: "Single signature",
    status: "Completed",
  },
  {
    id: "TXN-02835",
    date: "30/04/25",
    company: "XYZ Ltd.",
    amount: 7500,
    approvalType: "Joint signature",
    signaturesRequired: "1 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02836",
    date: "01/05/25",
    company: "PQR Inc.",
    amount: 12000,
    approvalType: "Single signature",
    status: "Rejected",
  },
  {
    id: "TXN-02837",
    date: "02/05/25",
    company: "MNO Corp.",
    amount: 6500,
    approvalType: "Joint signature",
    signaturesRequired: "0 of 2 signatures required",
    status: "Pending",
  },
  {
    id: "TXN-02838",
    date: "03/05/25",
    company: "JKL Ltd.",
    amount: 9800,
    approvalType: "Single signature",
    status: "Completed",
  },
];

export const pendingValidations: Transaction[] = transactions.map((txn) => ({
  ...txn,
  status: "Pending",
}));

type ScheduledPaymentsType = {
  id: string;
  name: string;
  amount: number;
  scheduledDate: string;
  status: "Completed" | "Pending";
  approvers: string;
};

export const scheduledPayments: ScheduledPaymentsType[] = [
  {
    id: "3243242",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    id: "32445342",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
  {
    id: "323423242",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    id: "32dfd242",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
  {
    id: "3d3242",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    id: "324142",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
  {
    id: "324389842",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    id: "32gh772",
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
];
