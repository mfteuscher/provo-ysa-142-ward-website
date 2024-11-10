"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function updateData(formData) {
  // parse and console.log the formData

  const weekly = formData.get("weekly");
  const other = formData.get("other");
  console.log(weekly, other);

  // update the database with the new data

  await sql`
     UPDATE DATA
     SET VALUE = ${weekly}
     WHERE ID = 'weekly';
   `;

  await sql`
      UPDATE DATA
      SET VALUE = ${other}
      WHERE ID = 'other';
    `;

  revalidatePath("/");
  revalidatePath("/admin");
}
