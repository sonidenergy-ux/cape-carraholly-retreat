export type SearchIndexItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "Accommodation" | "Experience" | "Journal";
};

/** Mirrors on-page copy for Fuse search (accommodations, experiences, journal). */
export const searchIndex: SearchIndexItem[] = [
  {
    id: "acc-oceanfront",
    title: "Oceanfront Lodges",
    description:
      "Three-bedroom coastal retreats with private hot tubs, hearths, and twilight firepits by the water—crafted for families and small groups who expect the exceptional.",
    href: "#accommodations",
    category: "Accommodation",
  },
  {
    id: "acc-dome",
    title: "Waterfront Dome",
    description:
      "Panoramic inlet views, king bed, and layered linens in a serene hideaway designed for quiet reconnection above the tide line.",
    href: "#accommodations",
    category: "Accommodation",
  },
  {
    id: "acc-yurt",
    title: "Secluded Yurts",
    description:
      "Elevated forest platforms wrapped in stillness, with curated shared amenities moments away—intimate, grounded, unforgettable.",
    href: "#accommodations",
    category: "Accommodation",
  },
  {
    id: "exp-kayak",
    title: "Ocean Kayaking",
    description:
      "Glide through sheltered coves and discover shoreline wildlife at your own unhurried pace.",
    href: "#experiences",
    category: "Experience",
  },
  {
    id: "exp-trails",
    title: "Forest Trails",
    description:
      "Wander old-growth pathways where every step brings deeper calm and panoramic viewpoints.",
    href: "#experiences",
    category: "Experience",
  },
  {
    id: "exp-sauna",
    title: "Nordic Sauna",
    description: "Restore body and mind with heat rituals inspired by the wild Pacific coast.",
    href: "#experiences",
    category: "Experience",
  },
  {
    id: "exp-crab",
    title: "Fresh Crabbing",
    description:
      "Experience coastal tradition with hands-on crabbing and unforgettable dockside moments.",
    href: "#experiences",
    category: "Experience",
  },
  {
    id: "exp-gazebo",
    title: "Gazebo Gatherings",
    description:
      "Host intimate celebrations and sunset socials in a private waterfront gazebo setting.",
    href: "#experiences",
    category: "Experience",
  },
  {
    id: "journal-spring",
    title: "The First Boat Ride of Spring",
    description:
      "As the mist lifts from the inlet, the shoreline reveals itself in layers of emerald and silver—a gentle arrival that feels worlds away from the city.",
    href: "#journal",
    category: "Journal",
  },
  {
    id: "journal-trail",
    title: "Evening Light on the Forest Trail",
    description:
      "Soft footfalls on cedar-lined paths, the scent of salt and pine, and a stillness that invites you to slow every breath.",
    href: "#journal",
    category: "Journal",
  },
  {
    id: "journal-dark",
    title: "Sanctuary After Dark",
    description:
      "Stars over the water, the glow of a private hot tub, and the quiet hum of a place designed for deep rest.",
    href: "#journal",
    category: "Journal",
  },
];
