export type CorporateStatus = "Verified" | "Pending" | "Incomplete";

export interface Corporate {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: CorporateStatus;
  imageUrl: string;
}

export const corporates: Corporate[] = [
  {
    id: "corp-1a2b3c",
    name: "Barone LLC",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=1",
  },
  {
    id: "corp-4d5e6f",
    name: "Blanford Ltd.",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=2",
  },
  {
    id: "corp-7g8h9i",
    name: "Abastergo Ltd.",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Pending",
    imageUrl: "https://picsum.photos/40/40?random=3",
  },
  {
    id: "corp-j1k2l3",
    name: "Blanford Ltd.",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Verified",
    imageUrl: "https://picsum.photos/40/40?random=4",
  },
  {
    id: "corp-m4n5o6",
    name: "Acme Co.",
    phone: "+435802654",
    email: "jonet@gmail.com",
    status: "Incomplete",
    imageUrl: "https://picsum.photos/40/40?random=5",
  },
  // ... continue with unique ids like "corp-abcdef", "corp-ghijk1", etc.
];
