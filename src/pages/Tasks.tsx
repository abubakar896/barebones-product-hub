
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  assignee: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Update product catalog", description: "Add new product images and descriptions", status: "in-progress", priority: "high", assignee: "Sarah" },
    { id: 2, title: "Review customer feedback", description: "Analyze recent customer reviews", status: "todo", priority: "medium", assignee: "Mike" },
    { id: 3, title: "Optimize database queries", description: "Improve application performance", status: "completed", priority: "high", assignee: "Alex" },
    { id: 4, title: "Design new landing page", description: "Create mockups for homepage redesign", status: "todo", priority: "low", assignee: "Emily" },
  ]);

  const addTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title: `New Task ${tasks.length + 1}`,
      description: "Task description",
      status: "todo",
      priority: "medium",
      assignee: "Unassigned",
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === "completed" ? "todo" : "completed" as const }
        : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "todo": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tasks</h1>
          <Button onClick={addTask} className="gap-2">
            <Plus className="w-4 h-4" />
            Create Task
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {tasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{task.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Badge className={getStatusColor(task.status)}>
                      {task.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{task.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Assigned to: {task.assignee}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => toggleTaskStatus(task.id)}
                    className="gap-2"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {task.status === "completed" ? "Reopen" : "Complete"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
