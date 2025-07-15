import { useActions, useAtomx } from "atomix-react";
import type { Actions, InitalStat, Todo } from "./atom/todo";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Check, Trash2 } from "lucide-react";

export default function Todo() {
    const [text, setText] = useState("");
    const todos: Todo[] = useAtomx((s: InitalStat) => s.todos);
    const { addTodo, removeTodo, toggleTodo }: Actions = useActions();

    const handleAdd = () => {
        if (text.trim() !== "") {
            addTodo(text.trim());
            setText("");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black p-4 text-white">
            <Card className="w-full max-w-md shadow-xl rounded-2xl border border-slate-800 bg-zinc-900 text-white">
                <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-center">📝 Todo List</CardTitle>
                    <CardDescription className="text-center text-sm text-zinc-400">
                        Track and manage your tasks efficiently
                    </CardDescription>
                    <div className="mt-4 flex gap-2">
                        <Input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter a new task"
                            className="flex-grow bg-zinc-800 text-white placeholder:text-zinc-400"
                        />
                        <Button onClick={handleAdd}>Add</Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                    {todos.length === 0 ? (
                        <p className="text-center text-sm text-zinc-500">
                            No todos yet. Add one!
                        </p>
                    ) : (
                        todos.map((todo) => (
                            <div
                                key={todo.id}
                                className={`flex justify-between items-center px-4 py-2 border rounded-xl shadow-sm transition-all duration-200 ${todo.completed
                                    ? "bg-green-900 text-green-300 line-through"
                                    : "bg-zinc-800"
                                    }`}
                            >
                                <span
                                    className="cursor-pointer flex-grow"
                                    onClick={() => toggleTodo(todo.id)}
                                >
                                    {todo.text}
                                </span>
                                <div className="flex gap-1">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => toggleTodo(todo.id)}
                                    >
                                        <Check className="w-4 h-4 text-green-400" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeTodo(todo.id)}
                                    >
                                        <Trash2 className="w-4 h-4 text-red-400" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
