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
    <div className="desktop-container">
      <div className="sidebar">
        <div className="logo-area">
          <h2>Inventory App</h2>
        </div>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Customers</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <header className="top-bar">
          <h3>Overview</h3>
          <div className="actions">
            <button>New Order</button>
            <button className="primary">Add Product</button>
          </div>
        </header>

        <div className="scroll-area">
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <StatCard {...stat} />
              </div>
            ))}
          </div>

          <div className="split-view">
            <div className="chart-section">
              <h4>Sales Performance</h4>
              <div className="chart-mockup">
                 <div style={{ height: '60%', width: '10%', background: '#3498db' }}></div>
                 <div style={{ height: '80%', width: '10%', background: '#3498db' }}></div>
                 <div style={{ height: '40%', width: '10%', background: '#3498db' }}></div>
                 <div style={{ height: '90%', width: '10%', background: '#3498db' }}></div>
                 <div style={{ height: '50%', width: '10%', background: '#3498db' }}></div>
                 <div style={{ height: '70%', width: '10%', background: '#3498db' }}></div>
              </div>
            </div>
            <div className="activity-section">
              <RecentActivity items={activities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
