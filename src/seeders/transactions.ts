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
  name: string;
  amount: number;
  scheduledDate: string;
  status: "Completed" | "Pending";
  approvers: string;
};

export const scheduledPayments: ScheduledPaymentsType[] = [
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Pending",
    approvers: "2 of 3 Required",
  },
  {
    name: "Samuel Johnson (Corp)",
    amount: 12500,
    scheduledDate: "30-04-25",
    status: "Completed",
    approvers: "2 of 3 Required",
  },
];
