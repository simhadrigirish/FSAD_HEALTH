import { useState } from 'react';
import './health.css';

export default function HealthWellness({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    issue: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const bookAppointment = (event) => {
    event.preventDefault();

    const { name, issue, date } = formData;

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({ name, issue, date, timestamp: new Date().toISOString() });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert(
      `Appointment Booked Successfully!\n\nName: ${name}\nIssue: ${issue}\nDate: ${date}`
    );

    setFormData({
      name: '',
      issue: '',
      date: ''
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Student Wellness Hub</h2>
        <div>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <a href="/wellness" onClick={(e) => { e.preventDefault(); navigate('/wellness'); }}>Wellness</a>
          <a href="/dashboard" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>Dashboard</a>
          <a href="/logout" onClick={(e) => { e.preventDefault(); navigate('/logout'); }}>Logout</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Your Health Matters</h1>
        <p>
          Access mental health support, wellness resources, and counseling
          services anytime.
        </p>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section">
        <h2>Wellness Resources</h2>

        <div className="card-container">
          <div className="card">
            <h3>🧠 Mental Health</h3>
            <p>Stress management and emotional support guides.</p>
            <ul className="resource-list">
              <li>24/7 Crisis Helpline: 1-800-273-8255</li>
              <li>Campus Counseling Center</li>
              <li>Online Therapy Sessions</li>
              <li>Meditation & Mindfulness Apps</li>
            </ul>
          </div>

          <div className="card">
            <h3>💪 Physical Fitness</h3>
            <p>Exercise routines for hostel students.</p>
            <ul className="resource-list">
              <li>Campus Gym & Fitness Center</li>
              <li>Yoga & Stretching Classes</li>
              <li>Sports Clubs & Activities</li>
              <li>Home Workout Videos</li>
            </ul>
          </div>

          <div className="card">
            <h3>🍎 Nutrition</h3>
            <p>Healthy eating habits for busy college life.</p>
            <ul className="resource-list">
              <li>Meal Planning Guides</li>
              <li>Nutritionist Consultation</li>
              <li>Healthy Recipe Database</li>
              <li>Dining Hall Nutrition Info</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="section">
        <h2>Daily Wellness Tips</h2>

        <div className="tips-grid">
          <div className="tip-category">
            <h3>😴 Sleep & Rest</h3>
            <ul>
              <li>✅ Sleep at least 7-8 hours daily</li>
              <li>✅ Maintain consistent sleep schedule</li>
              <li>✅ Avoid screens 1 hour before bed</li>
              <li>✅ Create a relaxing bedtime routine</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>💧 Hydration & Nutrition</h3>
            <ul>
              <li>✅ Drink 8 glasses of water daily</li>
              <li>✅ Eat balanced meals regularly</li>
              <li>✅ Include fruits and vegetables</li>
              <li>✅ Limit caffeine and sugar intake</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>📚 Study & Productivity</h3>
            <ul>
              <li>✅ Take breaks every 45 minutes</li>
              <li>✅ Use Pomodoro technique</li>
              <li>✅ Organize study space properly</li>
              <li>✅ Set realistic daily goals</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>🧘 Mental Wellness</h3>
            <ul>
              <li>✅ Practice deep breathing exercises</li>
              <li>✅ Talk to someone when stressed</li>
              <li>✅ Journal your thoughts daily</li>
              <li>✅ Engage in hobbies you enjoy</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>🏃 Physical Activity</h3>
            <ul>
              <li>✅ Exercise 30 minutes daily</li>
              <li>✅ Take walking breaks between classes</li>
              <li>✅ Stretch regularly to reduce tension</li>
              <li>✅ Join sports or fitness groups</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>👥 Social Connection</h3>
            <ul>
              <li>✅ Stay connected with friends & family</li>
              <li>✅ Join student clubs and activities</li>
              <li>✅ Attend campus social events</li>
              <li>✅ Build a support network</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment" className="section">
        <h2>Book Counseling Appointment</h2>

        <form onSubmit={bookAppointment}>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <select
            id="issue"
            value={formData.issue}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Issue</option>
            <option value="Stress">Stress</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Health Consultation">Health Consultation</option>
          </select>

          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Book Appointment</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Student Wellness Hub | Stay Healthy 🌿</p>
      </footer>
    </div>
  );
}
