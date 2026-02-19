import { StatCard, RecentActivity } from '@inventory/ui';
import './Dashboard.css';

export function Dashboard() {
  const stats = [
    { label: 'Total Products', value: '1,234', trend: '+12%', trendColor: '#28a745' },
    { label: 'Low Stock', value: '23', trend: '-5%', trendColor: '#dc3545' },
    { label: 'Orders Today', value: '45', trend: '+8%', trendColor: '#28a745' },
    { label: 'Revenue', value: '$12,345', trend: '+15%', trendColor: '#28a745' },
  ];

  const activities = [
    { id: '1', action: 'Stock Updated', item: 'MacBook Pro M3', time: '2 hours ago' },
    { id: '2', action: 'New Order', item: '#ORD-2024-001', time: '4 hours ago' },
    { id: '3', action: 'Low Stock Value', item: 'Wireless Mouse', time: '5 hours ago' },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Inventory Dashboard</h1>
        <div className="user-profile">
          <span>Admin User</span>
          <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            A
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li className="active">Dashboard</li>
              <li>Products</li>
              <li>Orders</li>
              <li>Customers</li>
              <li>Settings</li>
            </ul>
          </nav>
        </aside>

        <main className="main-area">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-wrapper">
                <StatCard {...stat} />
              </div>
            ))}
          </div>

          <div className="content-grid">
            <div className="chart-placeholder">
              <h3>Sales Overview</h3>
              <div className="fake-chart">
                {/* Placeholder for a chart */}
                <div style={{ height: '60%', width: '10%', background: '#007bff' }}></div>
                <div style={{ height: '80%', width: '10%', background: '#007bff' }}></div>
                <div style={{ height: '40%', width: '10%', background: '#007bff' }}></div>
                <div style={{ height: '90%', width: '10%', background: '#007bff' }}></div>
                <div style={{ height: '50%', width: '10%', background: '#007bff' }}></div>
                <div style={{ height: '70%', width: '10%', background: '#007bff' }}></div>
              </div>
            </div>
            <div className="activity-wrapper">
               <RecentActivity items={activities} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
