export type UserStatus = "Verified" | "Pending" | "Incomplete";

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: UserStatus;
  imageUrl: string;
}

export const users: User[] = [
  {
    id: "a1b2c3d4-1",
    name: "Eleanor Pena",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=1",
  },
  {
    id: "e5f6g7h8-2",
    name: "Wade Warren",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=2",
  },
  {
    id: "i9j0k1l2-3",
    name: "Kristin Watson",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=3",
  },
  {
    id: "m3n4o5p6-4",
    name: "Jerome Bell",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=4",
  },
  {
    id: "q7r8s9t0-5",
    name: "Esther Howard",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Incomplete",
    imageUrl: "https://picsum.photos/40/40?random=5",
  },
  {
    id: "u1v2w3x4-6",
    name: "Theresa Webb",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=6",
  },
  {
    id: "y5z6a7b8-7",
    name: "Darrell Steward",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=7",
  },
  {
    id: "c9d0e1f2-8",
    name: "Daniel Jones",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=8",
  },
];

export type LedgerEntry = {
  id: string;
  name: string;
  phone: string;
  addedBy: string;
  date: string;
  status: "Approved" | "Pending" | "Rejected";
  avatarUrl: string;
};

export const ledgerList: LedgerEntry[] = [
  {
    id: "a1b2c3",
    name: "Michael Carter (Corp)",
    phone: "03123456789",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/1/40",
  },
  {
    id: "d4e5f6",
    name: "Sophia Ahmed (Corp)",
    phone: "03019876543",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Approved",
    avatarUrl: "https://picsum.photos/seed/2/40",
  },
  {
    id: "g7h8i9",
    name: "Liam Hassan (Corp)",
    phone: "03216789456",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Rejected",
    avatarUrl: "https://picsum.photos/seed/3/40",
  },
  {
    id: "j1k2l3",
    name: "Ayesha Malik (Corp)",
    phone: "03451234567",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/4/40",
  },
  {
    id: "m4n5o6",
    name: "Michael Carter (Corp)",
    phone: "03123456789",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/1/40",
  },
  {
    id: "p7q8r9",
    name: "Sophia Ahmed (Corp)",
    phone: "03019876543",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Approved",
    avatarUrl: "https://picsum.photos/seed/2/40",
  },
  {
    id: "s1t2u3",
    name: "Liam Hassan (Corp)",
    phone: "03216789456",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Rejected",
    avatarUrl: "https://picsum.photos/seed/3/40",
  },
  {
    id: "v4w5x6",
    name: "Ayesha Malik (Corp)",
    phone: "03451234567",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/4/40",
  },
  {
    id: "y7z8a9",
    name: "Michael Carter (Corp)",
    phone: "03123456789",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/1/40",
  },
  {
    id: "b1c2d3",
    name: "Sophia Ahmed (Corp)",
    phone: "03019876543",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Approved",
    avatarUrl: "https://picsum.photos/seed/2/40",
  },
  {
    id: "e4f5g6",
    name: "Liam Hassan (Corp)",
    phone: "03216789456",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Rejected",
    avatarUrl: "https://picsum.photos/seed/3/40",
  },
  {
    id: "h7i8j9",
    name: "Ayesha Malik (Corp)",
    phone: "03451234567",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/4/40",
  },
];
