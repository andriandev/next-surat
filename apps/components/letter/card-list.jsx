import Link from "@/components/shared/link";

export default function CardList({ data }) {
  return (
    <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2">
      {data.map((item) => (
        <Link
          href={`/letter/${item?.slug}`}
          className="group flex cursor-pointer flex-col gap-3 rounded-md bg-slate-950 p-3 hover:bg-slate-800"
          key={item?.id}
        >
          <h3 className="text-lg text-slate-200">
            {item?.title}
            <span className="ml-2 hidden group-hover:inline-block">
              &raquo;
            </span>
          </h3>
          <p className="text-sm text-slate-300 group-hover:text-slate-200">
            {item?.desc}
          </p>
          <div className="mr-auto w-fit rounded-md bg-slate-800 px-1.5 py-0.5 text-xs text-slate-200 group-hover:bg-slate-700">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(item?.price)}
          </div>
        </Link>
      ))}
    </div>
  );
}