import { insertTodo } from "../api/actions";
import { supabase } from "@/lib/supabase";

async function imgs() {
    const { data: pdfs, error } = await supabase
        .from("pdfs")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching pdfs:", error.message);
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Add a New Todo</h1>

            <form action={insertTodo} className="flex gap-2 mb-8">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name..."
                    required
                    className="border p-2 rounded text-white"
                />
                <input type="file" name="path" accept="image/*" />
                <input
                    type="date"
                    name="created_at"
                    placeholder="Enter date..."
                    required
                    className="border p-2 rounded text-white"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>

            <div className="grid grid-cols-3 gap-4">
                {pdfs?.map((item) => (
                    <div key={item.id} className="border rounded p-2">
                        <img
                            src={item.path}
                            alt={item.name}
                            className="w-full h-40 object-cover rounded"
                        />
                        <p className="mt-2 text-sm">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default imgs;