export function extractPlaceholders(text) {
  // Cari placeholder di dalam teks
  const matches = text.match(/%([^%]+)%/g);

  // Hapus elemen duplikat dan kembalikan array unik
  return matches ? [...new Set(matches.map((item) => item.slice(1, -1)))] : [];
}

export function replacePlaceholders(text, replacements) {
  // Iterasi melalui setiap key dalam objek replacements
  for (const key in replacements) {
    if (replacements.hasOwnProperty(key)) {
      // Replace semua occurrence dari key dengan nilai dalam objek
      const regex = new RegExp(key, "g");
      text = text.replace(regex, replacements[key]);
    }
  }
  return text;
}
