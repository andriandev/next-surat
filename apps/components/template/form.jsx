export default function Form({ data }) {
  return (
    <>
      <form>
        <textarea
          className="mb-10 w-full rounded-md border-0 bg-slate-800 p-2 focus:outline-none"
          defaultValue={data?.content}
          rows={10}
        ></textarea>
      </form>
    </>
  );
}
