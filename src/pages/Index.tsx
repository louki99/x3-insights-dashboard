
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  FileText, 
  TrendingUp, 
  DollarSign,
  Package,
  ShoppingCart,
  BarChart3,
  PieChart,
  Calendar,
  Search,
  Plus,
  Filter,
  Download,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { ProductDistributionChart } from "@/components/dashboard/ProductDistributionChart";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { KPICard } from "@/components/dashboard/KPICard";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Business Intelligence Dashboard</h1>
              <p className="text-sm text-slate-600 mt-1">Enterprise Resource Planning - Sage X3 Style</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Order
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Revenue"
            value="$2,847,392"
            change="+12.5%"
            trend="up"
            icon={DollarSign}
            description="vs last month"
          />
          <KPICard
            title="Active Orders"
            value="1,247"
            change="+8.2%"
            trend="up"
            icon={ShoppingCart}
            description="processing & pending"
          />
          <KPICard
            title="Total Customers"
            value="8,532"
            change="+15.1%"
            trend="up"
            icon={Users}
            description="active accounts"
          />
          <KPICard
            title="Inventory Items"
            value="45,678"
            change="-2.3%"
            trend="down"
            icon={Package}
            description="stock units"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-slate-900 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                Sales Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium text-slate-900 flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-blue-600" />
                Product Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProductDistributionChart />
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders Table */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium text-slate-900 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Recent Orders
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  247 pending
                </Badge>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <RecentOrdersTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
