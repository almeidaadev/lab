import { insertTodo } from "../api/actions";

function TodosPage() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Add a New Todo</h1>

            <form action={insertTodo} className="flex gap-2">
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
        </div>
    );
}

export default TodosPage;
