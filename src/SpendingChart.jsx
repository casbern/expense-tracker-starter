import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#6366F1', '#34D399', '#F87171', '#FBBF24', '#A78BFA', '#38BDF8', '#FB923C'];

function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `$${value}`}
            contentStyle={{
              background: '#16172A',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              fontSize: '13px',
              fontFamily: 'Sora, sans-serif',
              color: '#ECEDF5',
            }}
            itemStyle={{ color: '#ECEDF5' }}
            labelStyle={{ color: '#7678A0' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', fontFamily: 'Sora, sans-serif', color: '#7678A0' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
