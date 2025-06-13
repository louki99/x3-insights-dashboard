
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ShoppingCart, 
  Package, 
  FileText, 
  CreditCard, 
  BarChart3,
  Settings,
  Plus
} from "lucide-react";

const quickActionItems = [
  {
    title: "Customers",
    description: "Manage customer accounts",
    icon: Users,
    color: "bg-blue-500",
    action: "Add Customer"
  },
  {
    title: "Orders",
    description: "Process sales orders",
    icon: ShoppingCart,
    color: "bg-emerald-500",
    action: "New Order"
  },
  {
    title: "Inventory",
    description: "Stock management",
    icon: Package,
    color: "bg-orange-500",
    action: "Add Item"
  },
  {
    title: "Invoices",
    description: "Billing & payments",
    icon: FileText,
    color: "bg-purple-500",
    action: "Create Invoice"
  },
  {
    title: "Payments",
    description: "Financial transactions",
    icon: CreditCard,
    color: "bg-pink-500",
    action: "Record Payment"
  },
  {
    title: "Reports",
    description: "Analytics & insights",
    icon: BarChart3,
    color: "bg-indigo-500",
    action: "Generate Report"
  }
];

export const QuickActions = () => {
  return (
    <Card className="bg-white shadow-sm mb-8">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium text-slate-900 flex items-center">
          <Settings className="w-5 h-5 mr-2 text-blue-600" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActionItems.map((item) => (
            <div key={item.title} className="text-center group">
              <div className="mb-3">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-200`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-medium text-sm text-slate-900 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500 mb-3">{item.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-xs hover:bg-blue-50 hover:border-blue-200"
              >
                <Plus className="w-3 h-3 mr-1" />
                {item.action}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
