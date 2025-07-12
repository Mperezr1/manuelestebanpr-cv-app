import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { User, Eye, BarChart2, Code } from 'lucide-react';
// The import paths here assume AdminDashboard.js is in src/components/pages/
import StatCard from '../common/StatCard';
import ChartCard from '../common/ChartCard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// THE FIX: Make sure "onLogout" is included here in the curly braces.
function AdminDashboard({ onLogout, analyticsData }) {
  return (
    <div className="container mx-auto max-w-6xl">
      {/* This button needs the onLogout function to work */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">Admin Dashboard</h1>
        <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Eye size={32} />} title="Total Views" value={analyticsData.totalViews.toLocaleString()} />
        <StatCard icon={<User size={32} />} title="Unique Visitors" value={analyticsData.uniqueVisitors.toLocaleString()} />
        <StatCard icon={<BarChart2 size={32} />} title="Avg. Time (sec)" value={
            (analyticsData.sectionTimings.reduce((acc, curr) => acc + curr.time, 0) / analyticsData.sectionTimings.length).toFixed(1)
        } />
         <StatCard icon={<Code size={32} />} title="Most Viewed" value="Experience" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard title="Time Spent per Section (seconds)">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analyticsData.sectionTimings} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }} />
                    <Legend />
                    <Bar dataKey="time" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Visitor Sources">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={analyticsData.visitorSources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                        {analyticsData.visitorSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

export default AdminDashboard;
