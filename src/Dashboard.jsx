import { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard({ navigate }) {
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    stress: 0,
    anxiety: 0,
    health: 0
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(stored);
    
    const total = stored.length;
    const stress = stored.filter(b => b.issue === 'Stress').length;
    const anxiety = stored.filter(b => b.issue === 'Anxiety').length;
    const health = stored.filter(b => b.issue === 'Health Consultation').length;
    
    setStats({ total, stress, anxiety, health });
  }, []);

  const deleteBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
    
    const total = updated.length;
    const stress = updated.filter(b => b.issue === 'Stress').length;
    const anxiety = updated.filter(b => b.issue === 'Anxiety').length;
    const health = updated.filter(b => b.issue === 'Health Consultation').length;
    
    setStats({ total, stress, anxiety, health });
  };

  return (
    <div className="dashboard">
      <nav>
        <h2>Admin Dashboard</h2>
        <div>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <a href="/wellness" onClick={(e) => { e.preventDefault(); navigate('/wellness'); }}>Wellness</a>
          <a href="/dashboard" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>Dashboard</a>
          <a href="/logout" onClick={(e) => { e.preventDefault(); navigate('/logout'); }}>Logout</a>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>Booking Tracker</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>📊 Total Bookings</h3>
            <p className="stat-number">{stats.total}</p>
          </div>
          <div className="stat-card">
            <h3>😰 Stress</h3>
            <p className="stat-number">{stats.stress}</p>
          </div>
          <div className="stat-card">
            <h3>😟 Anxiety</h3>
            <p className="stat-number">{stats.anxiety}</p>
          </div>
          <div className="stat-card">
            <h3>🏥 Health</h3>
            <p className="stat-number">{stats.health}</p>
          </div>
        </div>

        <div className="bookings-section">
          <h2>All Appointments</h2>
          {bookings.length === 0 ? (
            <p className="no-bookings">No bookings yet</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Issue</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{booking.name}</td>
                      <td>{booking.issue}</td>
                      <td>{booking.date}</td>
                      <td>
                        <button 
                          className="delete-btn"
                          onClick={() => deleteBooking(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <footer>
        <p>© 2026 Student Wellness Hub | Admin Panel 🔒</p>
      </footer>
    </div>
  );
}
