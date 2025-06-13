
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentOrders = [
  {
    id: "ORD-2024-001",
    customer: "Acme Corporation",
    date: "2024-01-15",
    amount: "$12,450.00",
    status: "Processing",
    items: 15,
    priority: "High"
  },
  {
    id: "ORD-2024-002",
    customer: "Global Tech Solutions",
    date: "2024-01-15",
    amount: "$8,920.00",
    status: "Shipped",
    items: 8,
    priority: "Medium"
  },
  {
    id: "ORD-2024-003",
    customer: "Innovation Industries",
    date: "2024-01-14",
    amount: "$15,670.00",
    status: "Pending",
    items: 22,
    priority: "High"
  },
  {
    id: "ORD-2024-004",
    customer: "Metro Distributors",
    date: "2024-01-14",
    amount: "$6,340.00",
    status: "Delivered",
    items: 5,
    priority: "Low"
  },
  {
    id: "ORD-2024-005",
    customer: "Pacific Enterprises",
    date: "2024-01-13",
    amount: "$9,830.00",
    status: "Processing",
    items: 12,
    priority: "Medium"
  }
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    "Processing": { variant: "default" as const, className: "bg-blue-100 text-blue-800" },
    "Shipped": { variant: "default" as const, className: "bg-orange-100 text-orange-800" },
    "Pending": { variant: "default" as const, className: "bg-yellow-100 text-yellow-800" },
    "Delivered": { variant: "default" as const, className: "bg-green-100 text-green-800" }
  };
  
  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Pending;
  
  return (
    <Badge variant={config.variant} className={config.className}>
      {status}
    </Badge>
  );
};

const getPriorityBadge = (priority: string) => {
  const priorityConfig = {
    "High": { variant: "destructive" as const },
    "Medium": { variant: "secondary" as const },
    "Low": { variant: "outline" as const }
  };
  
  const config = priorityConfig[priority as keyof typeof priorityConfig] || priorityConfig.Medium;
  
  return <Badge variant={config.variant}>{priority}</Badge>;
};

export const RecentOrdersTable = () => {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="font-medium text-slate-700">Order ID</TableHead>
            <TableHead className="font-medium text-slate-700">Customer</TableHead>
            <TableHead className="font-medium text-slate-700">Date</TableHead>
            <TableHead className="font-medium text-slate-700">Amount</TableHead>
            <TableHead className="font-medium text-slate-700">Items</TableHead>
            <TableHead className="font-medium text-slate-700">Priority</TableHead>
            <TableHead className="font-medium text-slate-700">Status</TableHead>
            <TableHead className="font-medium text-slate-700">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentOrders.map((order) => (
            <TableRow key={order.id} className="hover:bg-slate-50">
              <TableCell className="font-medium text-blue-600">{order.id}</TableCell>
              <TableCell className="font-medium">{order.customer}</TableCell>
              <TableCell className="text-slate-600">{order.date}</TableCell>
              <TableCell className="font-semibold">{order.amount}</TableCell>
              <TableCell className="text-slate-600">{order.items}</TableCell>
              <TableCell>{getPriorityBadge(order.priority)}</TableCell>
              <TableCell>{getStatusBadge(order.status)}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
