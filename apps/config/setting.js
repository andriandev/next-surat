export const SITE_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const SITE_ICON =
  process.env.NEXT_PUBLIC_SITE_ICON ||
  "https://ik.imagekit.io/asdev/next/icon.png";
export const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || "AndrianDev";
export const SITE_SEPARATOR = process.env.NEXT_PUBLIC_SITE_SEPARATOR || "-";
export const SITE_TAG = process.env.NEXT_PUBLIC_SITE_TAG || "Your Tag";
export const SITE_DESC =
  process.env.NEXT_PUBLIC_SITE_DESC || "Your Description";
export const SITE_INDEX =
  process.env.NEXT_PUBLIC_SITE_INDEX == "true" ? true : false || true;
export const SITE_IMG_LOADER = process.env.NEXT_PUBLIC_IMG_LOADER || "default";
export const SITE_API_URL = process.env.NEXT_API_URL || "";
