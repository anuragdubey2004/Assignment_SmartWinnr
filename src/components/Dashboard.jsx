import { Users, TrendingUp, DollarSign, UserPlus } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MetricsCard from './MetricsCard';

const monthlyData = [
  { month: 'Jan', users: 4000, signups: 240, sales: 24000 },
  { month: 'Feb', users: 5000, signups: 300, sales: 28000 },
  { month: 'Mar', users: 6000, signups: 350, sales: 32000 },
  { month: 'Apr', users: 7500, signups: 420, sales: 38000 },
  { month: 'May', users: 9000, signups: 500, sales: 45000 },
  { month: 'Jun', users: 10500, signups: 580, sales: 52000 },
];

const userDistribution = [
  { name: 'Active', value: 6500, color: '#3b82f6' },
  { name: 'Inactive', value: 2500, color: '#94a3b8' },
  { name: 'New', value: 1500, color: '#10b981' },
];

function Dashboard({ metrics }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Users"
          value={metrics.users.toLocaleString()}
          icon={Users}
          color="text-blue-500"
          trend="↑ 12% from last month"
        />
        <MetricsCard
          title="New Sign-ups"
          value={metrics.signups.toLocaleString()}
          icon={UserPlus}
          color="text-green-500"
          trend="↑ 8% from last month"
        />
        <MetricsCard
          title="Total Sales"
          value={`$${metrics.sales.toLocaleString()}`}
          icon={DollarSign}
          color="text-purple-500"
          trend="↑ 15% from last month"
        />
        <MetricsCard
          title="Active Users"
          value={metrics.activeUsers.toLocaleString()}
          icon={TrendingUp}
          color="text-orange-500"
          trend="↑ 5% from last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="signups" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">User Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {userDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;