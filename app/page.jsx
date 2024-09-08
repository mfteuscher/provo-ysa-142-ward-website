
import { sql } from "@vercel/postgres";

export default async function Home() {

  const { rows } = await sql`SELECT * FROM data`;
  console.log(rows);
  const weekly = rows.find((row) => row.id === "weekly");
  const other = rows.find((row) => row.id === "other");

  return (
    <main className="grow font-sans grid p-10 gap-8 lg:grid-cols-2">
      <section>
        <h2 className="text-3xl font-semibold mb-6">Weekly Events</h2>
        <div className="shadow-normal leading-8 text-gray-800 font-medium w-full bg-white p-8 whitespace-pre-line">
          {weekly.value}
        </div>
      </section>
      <section>
      <h2 className="text-3xl font-semibold mb-6">Other events</h2>
        <div className="shadow-normal leading-8 text-gray-800 font-medium w-full bg-white p-8 whitespace-pre-line">
          {other.value}
        </div>
      </section>
    </main>
  );
}
