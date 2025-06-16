
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "updated product",
    target: "Mobile App v2.1",
    time: "2 hours ago",
    type: "update",
    initials: "SC",
  },
  {
    id: 2,
    user: "Mike Johnson",
    action: "completed task",
    target: "User interface redesign",
    time: "4 hours ago",
    type: "completed",
    initials: "MJ",
  },
  {
    id: 3,
    user: "Emily Davis",
    action: "created new",
    target: "API Documentation",
    time: "6 hours ago",
    type: "created",
    initials: "ED",
  },
  {
    id: 4,
    user: "Alex Rivera",
    action: "commented on",
    target: "Performance optimization",
    time: "1 day ago",
    type: "comment",
    initials: "AR",
  },
];

const getTypeBadge = (type: string) => {
  switch (type) {
    case "update":
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Updated</Badge>;
    case "completed":
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
    case "created":
      return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Created</Badge>;
    case "comment":
      return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Comment</Badge>;
    default:
      return <Badge variant="outline">Activity</Badge>;
  }
};

export function RecentActivity() {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs">
                  {activity.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{activity.user}</span>
                  {getTypeBadge(activity.type)}
                </div>
                <p className="text-sm text-gray-600">
                  {activity.action} <span className="font-medium text-gray-900">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
