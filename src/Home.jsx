import './health.css';

export default function Home({ navigate }) {
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
        <h1>Welcome to Student Wellness Hub</h1>
        <p>Your comprehensive platform for mental health, physical wellness, and holistic student care</p>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <h2>🌟 Introduction</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
            Student Wellness Hub is a dedicated platform designed to support the physical, mental, and emotional well-being 
            of students. We understand the unique challenges faced by students in their academic journey and provide 
            comprehensive resources to help them thrive.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: '1.8', color: '#555' }}>
            Our mission is to create a supportive environment where every student can access the tools, guidance, and 
            professional help they need to maintain a healthy balance between academic success and personal wellness.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <h2>📖 About Our Platform</h2>
        
        <div className="card-container">
          <div className="card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide accessible, comprehensive wellness resources that empower students to take charge of their 
              mental and physical health while pursuing academic excellence.
            </p>
          </div>

          <div className="card">
            <h3>👁️ Our Vision</h3>
            <p>
              A campus community where every student feels supported, valued, and equipped with the resources to 
              maintain optimal health and well-being throughout their academic journey.
            </p>
          </div>

          <div className="card">
            <h3>💡 Our Values</h3>
            <p>
              Compassion, accessibility, confidentiality, and holistic care. We believe in treating every student 
              with respect and providing judgment-free support.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2>✨ What We Offer</h2>
        
        <div className="tips-grid">
          <div className="tip-category">
            <h3>🧠 Mental Health Support</h3>
            <ul>
              <li>✅ Professional counseling services</li>
              <li>✅ 24/7 crisis helpline access</li>
              <li>✅ Stress management resources</li>
              <li>✅ Peer support groups</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>💪 Physical Wellness</h3>
            <ul>
              <li>✅ Fitness programs & gym access</li>
              <li>✅ Nutrition guidance</li>
              <li>✅ Yoga and meditation classes</li>
              <li>✅ Sports and recreation activities</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>📅 Easy Appointment Booking</h3>
            <ul>
              <li>✅ Online scheduling system</li>
              <li>✅ Quick appointment confirmation</li>
              <li>✅ Flexible time slots</li>
              <li>✅ Appointment reminders</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>📚 Educational Resources</h3>
            <ul>
              <li>✅ Wellness tips and guides</li>
              <li>✅ Self-help materials</li>
              <li>✅ Workshop and webinar access</li>
              <li>✅ Health awareness programs</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>🔒 Privacy & Confidentiality</h3>
            <ul>
              <li>✅ Secure data protection</li>
              <li>✅ Confidential consultations</li>
              <li>✅ HIPAA compliant services</li>
              <li>✅ Anonymous support options</li>
            </ul>
          </div>

          <div className="tip-category">
            <h3>🌐 24/7 Accessibility</h3>
            <ul>
              <li>✅ Round-the-clock online access</li>
              <li>✅ Mobile-friendly platform</li>
              <li>✅ Emergency support available</li>
              <li>✅ Multi-device compatibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <h2 style={{ color: 'white' }}>Ready to Start Your Wellness Journey?</h2>
        <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', marginBottom: '30px', opacity: '0.95' }}>
          Explore our wellness resources, book appointments, and take the first step towards a healthier you.
        </p>
        <button 
          onClick={() => navigate('/wellness')}
          style={{ 
            background: 'white', 
            color: '#667eea',
            padding: 'clamp(12px, 2vw, 16px) clamp(30px, 5vw, 40px)',
            fontSize: 'clamp(15px, 2vw, 18px)',
            fontWeight: '700',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Student Wellness Hub | Stay Healthy 🌿</p>
      </footer>
    </div>
  );
}
