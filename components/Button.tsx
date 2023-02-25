export default function Button() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select id="select" className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option value="1">No Compartido</option>
                <option value="2">Dividir entre 2</option>
                <option value="3">Dividido en 3</option>
                <option value="4">Dividido en 4</option>
            </select>
        </div>
    );
  }
