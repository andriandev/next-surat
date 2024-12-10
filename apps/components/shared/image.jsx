"use client";

import NextImage from "next/image";
import { SITE_IMG_LOADER } from "@/config/setting";

export default function Image({ optimize = "enable", ...props }) {
  const loaderImage = SITE_IMG_LOADER;

  if (optimize == "disable") {
    return <img {...props} />;
  }

  const placeHolder =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYGBgYHBwYJCgkKCQ0MCwsMDRQODw4PDhQfExYTExYTHxshGxkbIRsxJiIiJjE4Ly0vOEQ9PURWUVZwcJYBBgYGBgYGBgcHBgkKCQoJDQwLCwwNFA4PDg8OFB8TFhMTFhMfGyEbGRshGzEmIiImMTgvLS84RD09RFZRVnBwlv/CABEIAAcACgMBEQACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAADB//aAAgBAQAAAACtL//EABUBAQEAAAAAAAAAAAAAAAAAAAIE/9oACAECEAAAAJX/AP/EABUBAQEAAAAAAAAAAAAAAAAAAAME/9oACAEDEAAAALD/AP/EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMRBAUGQVH/2gAIAQEAAT8AXWU7MGdqBYre9GDlpwMJP//EABgRAAIDAAAAAAAAAAAAAAAAAAABEhNB/9oACAECAQE/ALnqJI//xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDEUH/2gAIAQMBAT8AMBxjS25//9k=";

  if (loaderImage == "imagekit.io") {
    const imageKitLoader = ({ src, width, quality }) => {
      return `${src}?tr=w-${width},q-${quality || 75}`;
    };

    return (
      <NextImage loader={imageKitLoader} placeholder={placeHolder} {...props} />
    );
  }

  return <NextImage placeholder={placeHolder} {...props} />;
}
