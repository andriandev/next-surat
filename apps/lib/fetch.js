const DB_LETTER = [
  {
    id: 1,
    slug: "surat-lamaran-kerja",
    title: "Surat Lamaran Kerja",
    desc: "Surat resmi yang dibuat seorang pencari kerja untuk dikirimkan ke instansi atau perusahaan dengan tujuan melamar pekerjaan.",
    price: "15000",
  },
  {
    id: 2,
    slug: "surat-izin-cuti",
    title: "Surat Izin Cuti",
    desc: "Surat yang ditujukan untuk mendapatkan cuti kerja dan untuk bolos kerja karena males.",
    price: "20000",
  },
  {
    id: 3,
    slug: "surat-izin-tidak-masuk-kerja",
    title: "Surat Izin Tidak Masuk Kerja",
    desc: "Surat yang memberikan pernyataan tidak masuk kerja dalam waktu tertentu dan tentu saja karena males.",
    price: "20000",
  },
  {
    id: 4,
    slug: "surat-pengunduran-diri",
    title: "Surat Pengunduran Diri",
    desc: " Surat yang akan diajukan kepada pihak perusahaan ketika seorang karyawan berniat untuk mengundurkan diri karena sudah kaya.",
    price: "50000",
  },
];

const DB_TEMPLATE = [
  {
    id: 1,
    letter_id: 1,
    content:
      "<p>%tempat tinggal anda%, %tanggal surat dibuat%</p><br/><p>Kepada Yth.</p><p>HRD %nama perusahaan%</p><p>%alamat perusahaan%</p><br/><p>Perihal: Lamaran Pekerjaan</p><br/><p>Dengan hormat,</p><br/><p>Saya yang bertanda tangan di bawah ini:</p><p>Nama : %nama anda%</p><p>Alamat : %alamat anda%</p><p>No. Telepon : %nomor telepon anda%</p><p>Email : %email anda%</p><br/><p>Dengan ini mengajukan lamaran untuk posisi %posisi yang dilamar% di perusahaan Bapak/Ibu. Saya memiliki pengalaman/kemampuan dalam %keahlian% dan percaya dapat memberikan kontribusi positif bagi perusahaan.</p><p>Sebagai bahan pertimbangan, saya lampirkan:</p><br/><ol><li>1. CV</li><li>2. Fotokopi ijazah</li><li>3. Fotokopi KTP</li></ol><br/><p>Besar harapan saya untuk dapat bergabung dan memberikan kontribusi bagi perusahaan Bapak/Ibu. Saya bersedia dihubungi untuk sesi wawancara sesuai waktu yang ditentukan.</p><br/><p>Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.</p><br/><p>Hormat saya,</p><p>%nama anda%</p>",
  },
  {
    id: 2,
    letter_id: 2,
    content:
      "<p>%tempat tinggal anda%, %tanggal surat dibuat%</p><p>Kepada Yth.</p><p>%nama perusahaan%</p><br/><p>Perihal: Permohonan Izin Cuti</p><br><p>Dengan hormat,</p><br><p>Saya yang bertanda tangan di bawah ini:</p><p>Nama : %nama anda%</p><p>Jabatan : %jabatan anda%</p><br><p>Dengan ini mengajukan permohonan cuti kerja selama %durasi cuti%, terhitung mulai tanggal %tanggal mulai cuti% hingga %tanggal akhir cuti%, dikarenakan %alasan%.</p><br><p>Saya telah memastikan bahwa tugas dan tanggung jawab saya dapat didelegasikan selama periode cuti.</p><br><p>Demikian surat izin ini saya ajukan. Atas perhatian dan pengertiannya, saya ucapkan terima kasih.</p><br><p>Hormat saya,</p><p>%nama anda%</p>",
  },
  {
    id: 3,
    letter_id: 3,
    content:
      "<p>%tempat tinggal anda%, %tanggal surat dibuat%</p><p>Kepada Yth.</p><p>%nama perusahaan%</p><br/><p>Perihal: Permohonan Izin Tidak Masuk Kerja</p><br><p>Dengan hormat,</p><br><p>Saya yang bertanda tangan di bawah ini:</p><p>Nama : %nama anda%</p><p>Jabatan : %jabatan anda%</p><br><p>Dengan ini mengajukan izin tidak masuk kerja pada tanggal %tanggal izin%, dikarenakan %alasan%.</p><br><p>Saya mohon pengertian dari Bapak/Ibu atas ketidakhadiran saya pada hari tersebut.</p><br><p>Demikian surat izin ini saya ajukan. Atas perhatian dan kebijaksanaannya, saya ucapkan terima kasih.</p><br><p>Hormat saya,</p><p>%nama anda%</p>",
  },
  {
    id: 4,
    letter_id: 4,
    content:
      "<p>%tempat tinggal anda%, %tanggal surat dibuat%</p><p>Kepada Yth.</p><p>%nama perusahaan%</p><br><p>Perihal: Surat Pengunduran Diri</p><br><p>Dengan hormat,</p><br><p>Saya yang bertanda tangan di bawah ini:</p><p>Nama : %nama anda%</p><p>Jabatan : %jabatan anda%</p><br><p>Dengan ini menyampaikan pengunduran diri saya dari %nama perusahaan% terhitung sejak tanggal %tanggal pengunduran diri%. Keputusan ini saya ambil setelah mempertimbangkan dengan matang demi pengembangan karier dan alasan pribadi.</p><br><p>Saya mengucapkan terima kasih atas kesempatan yang telah diberikan kepada saya untuk menjadi bagian dari %nama perusahaan%. Saya sangat menghargai pengalaman kerja, ilmu, dan dukungan yang telah saya terima selama ini.</p><br><p>Saya berkomitmen untuk membantu dalam masa transisi agar tugas dan tanggung jawab saya dapat diselesaikan dengan baik hingga hari terakhir saya bekerja.</p><br><p>Demikian surat pengunduran diri ini saya sampaikan. Atas perhatian dan pengertiannya, saya ucapkan terima kasih.</p><br><p>Hormat saya,</p><p>%nama anda%</p>",
  },
];

export function getDataLetter(slug = null) {
  if (!slug) return DB_LETTER;

  const dataLetter = DB_LETTER.find((item) => item.slug == slug);

  if (!dataLetter) return null;

  return dataLetter;
}

export function getDataTemplate(id = null) {
  if (!id) {
    return DB_TEMPLATE.filter((template) => {
      const title = DB_LETTER.find(
        (letter) => letter?.id == template?.letter_id,
      )?.title;
      return Object.assign(template, { title: title });
    });
  }

  const dataTemplate = DB_TEMPLATE.find((item) => item.id == id);

  if (!dataTemplate) return null;

  const title = DB_LETTER.find(
    (letter) => letter?.id == dataTemplate?.letter_id,
  )?.title;
  return Object.assign(dataTemplate, { title: title });
}

export function getDataTemplateByIdLetter(idLetter) {
  const dataTemplate = DB_TEMPLATE.find((item) => item.letter_id == idLetter);

  if (!dataTemplate) return null;

  return dataTemplate;
}
