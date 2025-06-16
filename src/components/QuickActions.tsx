
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Users, Calendar } from "lucide-react";

const actions = [
  {
    title: "New Product",
    description: "Add a new product to your catalog",
    icon: Plus,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Create Task",
    description: "Start a new task or project",
    icon: FileText,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Invite Team",
    description: "Add new team members",
    icon: Users,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    title: "Schedule Meeting",
    description: "Plan your next team sync",
    icon: Calendar,
    color: "bg-orange-500 hover:bg-orange-600",
  },
];

export function QuickActions() {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start gap-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className={`p-2 rounded-lg ${action.color} text-white`}>
                <action.icon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">{action.title}</div>
                <div className="text-xs text-gray-600">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
