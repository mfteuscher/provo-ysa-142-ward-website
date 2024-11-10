import Editors from "@/components/Editors";
import { sql } from "@vercel/postgres";

export default async function AdminPage() {
  const { rows } = await sql`SELECT * FROM data`;
  console.log(rows);
  const weekly = rows.find((row) => row.id === "weekly");
  const other = rows.find((row) => row.id === "other");

  return (
    <main>
      <Editors weekly={weekly.value} other={other.value} />
    </main>
  );
}
