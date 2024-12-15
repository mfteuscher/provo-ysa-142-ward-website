
import { sql } from "@vercel/postgres";

const links = [
  {
    label: "Schedule a Meeting with Bishop",
    href: "https://142ndward.youcanbook.me/"
  },
  {
    label: "Job Catalog",
    href: "https://docs.google.com/spreadsheets/d/1S3ur0n-KVmkVHtL1OAaalmuJji8ss9jm8xMqtb4CGbY/edit"
  },
]

const groupmeLinks = [
  {
    label: "Elder's Quorum",
    href: "https://groupme.com/join_group/104354104/AUMdTXBa"
  },
  {
    label: 'Relief Society',
    href: "https://groupme.com/join_group/86810710/uMXYH4Ed"
  },
  {
    label: 'FHE Group 1 (North 2000)',
    href: "https://groupme.com/join_group/100046584/7pErFATK"
  },
  {
    label: 'FHE Group 2 (Cul-de-sac)',
    href: "https://groupme.com/join_group/100267982/5uUBGFYK"
  },
  {
    label: 'FHE Group 3 (Moon River)',
    href: "https://groupme.com/join_group/104703287/1ug5sDaQ"
  }
]

export default async function Home() {

  const { rows } = await sql`SELECT * FROM data`;
  console.log(rows);
  const weekly = rows.find((row) => row.id === "weekly");
  const other = rows.find((row) => row.id === "other");

  return (
    <main className="grow font-sans grid p-10 gap-8 lg:grid-cols-2">
      <section>
        <h2 className="text-3xl font-semibold mb-6">Weekly Events</h2>
        <div className="shadow-normal leading-8 text-gray-800 font-medium w-full bg-white p-8 whitespace-pre-line break-words">
          {weekly.value}
        </div>
      </section>
      <section>
      <h2 className="text-3xl font-semibold mb-6">Other events</h2>
        <div className="shadow-normal leading-8 text-gray-800 font-medium w-full bg-white p-8 whitespace-pre-line break-words">
          {other.value}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-6">Helpful Links</h2>
        <ul className="shadow-normal text-sm md:text-base leading-8 text-gray-800 w-full bg-white p-8 whitespace-pre-line break-words divide-y">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="pl-6 block py-2 size-full hover:bg-blue-600 transition-colors hover:text-white hover:font-medium">{link.label}</a>
              </li>
          ))}
          <li className="font-semibold py-2 text-lg">GroupMe Links</li>
          {groupmeLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="pl-6 block py-2 size-full hover:bg-blue-600 transition-colors hover:text-white hover:font-medium">{link.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
