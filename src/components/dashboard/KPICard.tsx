
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  description: string;
}

export const KPICard = ({ title, value, change, trend, icon: Icon, description }: KPICardProps) => {
  const isPositive = trend === "up";
  
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
          <Badge 
            variant="secondary" 
            className={cn(
              "text-xs font-medium",
              isPositive 
                ? "bg-emerald-50 text-emerald-700" 
                : "bg-red-50 text-red-700"
            )}
          >
            {isPositive ? (
              <ArrowUp className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDown className="w-3 h-3 mr-1" />
            )}
            {change}
          </Badge>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-slate-600">{title}</h3>
          <div className="text-2xl font-bold text-slate-900">{value}</div>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
