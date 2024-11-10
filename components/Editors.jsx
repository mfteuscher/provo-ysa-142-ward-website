"use client";

import { updateData } from "@/app/actions/updateData";
import { toast } from "sonner";

export default function Editors({ weekly, other }) {
  return (
    <form
      className="grow font-sans grid p-10 gap-8 lg:grid-cols-2"
      action={updateData}
      onSubmit={() => toast.success("Content updated!")}
    >
      <div className="col-span-full flex justify-between border-b border-zinc-700 pb-4">
        <div className="font-bold text-3xl">Edit Content</div>
        <button className="px-4 py-3 bg-black rounded-md font-medium text-white">
          Update
        </button>
      </div>
      <section>
        <h2 className="text-3xl font-semibold mb-6">Weekly Events</h2>
        <div className="shadow-normal leading-8 text-gray-800 font-medium w-full bg-white p-8 whitespace-pre-line">
          <textarea
            name="weekly"
            rows={20}
            className="w-full p-2"
            defaultValue={weekly}
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-6">Other events</h2>
        <div className="shadow-normal leading-8 text-gray-800 font-medium w-full bg-white p-8 whitespace-pre-line">
          <textarea
            name="other"
            rows={8}
            className="w-full p-2"
            defaultValue={other}
          />
        </div>
      </section>
    </form>
  );
}
