import { useState } from "react";
import type { Todo } from "../types/todo";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "@/components/ui/label";

const initialForm: Omit<Todo, "id"> = {
  title: "",
  description: "",
  status: "Todo",
  dueDate: new Date(),
  difficulty: "Easy",
  priority: "Low",
};

export default function ManageTodos() {
  const [formData, setFormData] = useState(initialForm);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (name: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, dueDate: new Date(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      setTodos(todos.map(todo => todo.id === editId ? { ...formData, id: editId } : todo));
      setEditId(null);
    } else {
      setTodos([...todos, { ...formData, id: Date.now() }]);
    }
    setFormData(initialForm);
  };

  const handleEdit = (id: number) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      setFormData({ ...todo, dueDate: new Date(todo.dueDate) });
      setEditId(id);
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
    if (editId === id) setEditId(null);
  };

  function handleComplete(id: number) {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, status: 'Completed' } : todo
    ));
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 min-h-[80vh] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Left: Form */}
      <form className="md:w-1/2 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2">{editId ? "Edit Todo" : "Add Todo"}</h2>
        <Label>Title</Label>
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Label>Description</Label>
        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <Label>Status</Label>
        <div className="flex gap-4">
          {/* @ts-ignore */}
          <Select value={formData.status} onValueChange={v => handleSelect("status", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todo">Todo</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Blocker">Blocker</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          {/* @ts-ignore */}
          <Select value={formData.difficulty} onValueChange={v => handleSelect("difficulty", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">P0</SelectItem>
              <SelectItem value="Medium">P1</SelectItem>
              <SelectItem value="Hard">P2</SelectItem>
            </SelectContent>
          </Select>
          {/* @ts-ignore */}
          <Select value={formData.priority} onValueChange={v => handleSelect("priority", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Label>Date</Label>
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="dueDate"
          type="date"
          value={formData.dueDate instanceof Date ? formData.dueDate.toISOString().split('T')[0] : formData.dueDate}
          onChange={handleDateChange}
          required
        />
        <Button type="submit" className="w-full mt-2">{editId ? "Update Todo" : "Add Todo"}</Button>
      </form>
      {/* Right: Todo List */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-2">Your Todos</h2>
        {todos.length === 0 && <div className="text-gray-500">No todos yet.</div>}
        {todos.map(todo => (
          <Card key={todo.id} className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white shadow-lg border-l-8 border-blue-400 hover:border-blue-600 transition">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg text-gray-800">{todo.title}</span>
                <span className="ml-2 px-2 py-1 rounded text-xs bg-blue-100 text-blue-700">{todo.status}</span>
                <span className="ml-2 px-2 py-1 rounded text-xs bg-purple-100 text-purple-700">{todo.difficulty}</span>
                <span className="ml-2 px-2 py-1 rounded text-xs bg-pink-100 text-pink-700">{todo.priority}</span>
              </div>
              <div className="text-gray-600 mb-2">{todo.description}</div>
              <div className="text-sm text-gray-500">Due: {new Date(todo.dueDate).toLocaleDateString()}</div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => handleComplete(todo.id)} disabled={todo.status === 'Completed'}>
                <span className="w-5 h-5 flex items-center justify-center text-green-600">✓</span>
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleEdit(todo.id)}>
                <Pencil className="w-5 h-5 text-blue-500" />
              </Button> 
              <Button variant="outline" size="icon" onClick={() => handleDelete(todo.id)}>
                <Trash2 className="w-5 h-5 text-red-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
