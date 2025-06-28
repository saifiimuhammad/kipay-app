export type UserStatus = "Verified" | "Pending" | "Incomplete";

export interface User {
  name: string;
  phone: string;
  email: string;
  status: UserStatus;
  imageUrl: string;
}

export const users: User[] = [
  {
    name: "Eleanor Pena",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=1",
  },
  {
    name: "Wade Warren",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=2",
  },
  {
    name: "Kristin Watson",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=3",
  },
  {
    name: "Jerome Bell",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=4",
  },
  {
    name: "Esther Howard",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Incomplete",
    imageUrl: "https://picsum.photos/40/40?random=5",
  },
  {
    name: "Theresa Webb",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=6",
  },
  {
    name: "Darrell Steward",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=7",
  },
  {
    name: "Daniel Jones",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=8",
  },
  {
    name: "Eleanor Pena",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=1",
  },
  {
    name: "Wade Warren",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=2",
  },
  {
    name: "Kristin Watson",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=3",
  },
  {
    name: "Jerome Bell",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=4",
  },
  {
    name: "Esther Howard",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Incomplete",
    imageUrl: "https://picsum.photos/40/40?random=5",
  },
  {
    name: "Theresa Webb",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=6",
  },
  {
    name: "Darrell Steward",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=7",
  },
  {
    name: "Daniel Jones",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=8",
  },
  {
    name: "Eleanor Pena",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=1",
  },
  {
    name: "Wade Warren",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=2",
  },
  {
    name: "Kristin Watson",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=3",
  },
  {
    name: "Jerome Bell",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=4",
  },
  {
    name: "Esther Howard",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Incomplete",
    imageUrl: "https://picsum.photos/40/40?random=5",
  },
  {
    name: "Theresa Webb",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=6",
  },
  {
    name: "Darrell Steward",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=7",
  },
  {
    name: "Daniel Jones",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=8",
  },
];

export type LedgerEntry = {
  name: string;
  phone: string;
  addedBy: string;
  date: string;
  status: "Approved" | "Pending" | "Rejected";
  avatarUrl: string;
};

export const ledgerList: LedgerEntry[] = [
  {
    name: "Michael Carter (Corp)",
    phone: "03123456789",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/1/40",
  },
  {
    name: "Sophia Ahmed (Corp)",
    phone: "03019876543",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Approved",
    avatarUrl: "https://picsum.photos/seed/2/40",
  },
  {
    name: "Liam Hassan (Corp)",
    phone: "03216789456",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Rejected",
    avatarUrl: "https://picsum.photos/seed/3/40",
  },
  {
    name: "Ayesha Malik (Corp)",
    phone: "03451234567",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/4/40",
  },
  {
    name: "Michael Carter (Corp)",
    phone: "03123456789",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/1/40",
  },
  {
    name: "Sophia Ahmed (Corp)",
    phone: "03019876543",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Approved",
    avatarUrl: "https://picsum.photos/seed/2/40",
  },
  {
    name: "Liam Hassan (Corp)",
    phone: "03216789456",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Rejected",
    avatarUrl: "https://picsum.photos/seed/3/40",
  },
  {
    name: "Ayesha Malik (Corp)",
    phone: "03451234567",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/4/40",
  },
  {
    name: "Michael Carter (Corp)",
    phone: "03123456789",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/1/40",
  },
  {
    name: "Sophia Ahmed (Corp)",
    phone: "03019876543",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Approved",
    avatarUrl: "https://picsum.photos/seed/2/40",
  },
  {
    name: "Liam Hassan (Corp)",
    phone: "03216789456",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Rejected",
    avatarUrl: "https://picsum.photos/seed/3/40",
  },
  {
    name: "Ayesha Malik (Corp)",
    phone: "03451234567",
    addedBy: "Admin",
    date: "30/04/25",
    status: "Pending",
    avatarUrl: "https://picsum.photos/seed/4/40",
  },
];
