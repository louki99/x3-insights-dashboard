
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 245000, profit: 45000 },
  { month: 'Feb', sales: 289000, profit: 52000 },
  { month: 'Mar', sales: 312000, profit: 61000 },
  { month: 'Apr', sales: 287000, profit: 48000 },
  { month: 'May', sales: 356000, profit: 71000 },
  { month: 'Jun', sales: 398000, profit: 89000 },
  { month: 'Jul', sales: 425000, profit: 95000 },
  { month: 'Aug', sales: 467000, profit: 103000 },
  { month: 'Sep', sales: 489000, profit: 112000 },
  { month: 'Oct', sales: 523000, profit: 125000 },
  { month: 'Nov', sales: 578000, profit: 138000 },
  { month: 'Dec', sales: 634000, profit: 152000 }
];

export const SalesChart = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number, name: string) => [
              `$${value.toLocaleString()}`,
              name === 'sales' ? 'Revenue' : 'Profit'
            ]}
          />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="#2563eb" 
            strokeWidth={3}
            dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="profit" 
            stroke="#059669" 
            strokeWidth={3}
            dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#059669', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
