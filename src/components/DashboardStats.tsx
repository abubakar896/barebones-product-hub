
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, CheckCircle, Clock, Users } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "24",
    change: "+12%",
    changeType: "positive" as const,
    icon: Database,
  },
  {
    title: "Active Tasks",
    value: "42",
    change: "+8%",
    changeType: "positive" as const,
    icon: CheckCircle,
  },
  {
    title: "Pending Reviews",
    value: "7",
    change: "-15%",
    changeType: "negative" as const,
    icon: Clock,
  },
  {
    title: "Team Members",
    value: "12",
    change: "+2",
    changeType: "positive" as const,
    icon: Users,
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className={`text-xs ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
