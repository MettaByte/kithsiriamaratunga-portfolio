import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="section" id="profile">
      <div className="container">
        <h2 className="section-title">Professional Profile</h2>
        
        {/* Unified Executive Highlights Bar */}
        <div className="profile-stats-bar">
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Dean</span>
            <span className="stat-label">Former Faculty Head (KDU)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">MPhil</span>
            <span className="stat-label">English & Linguistics</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2-Way</span>
            <span className="stat-label">Sinhala ⟷ English Translation</span>
          </div>
        </div>

        {/* Three Pillars of Career Grid */}
        <div className="profile-pillars-grid">
          
          {/* Pillar 1 */}
          <div className="glass-card pillar-card">
            <span className="pillar-tag">ACADEMIC LEGACY</span>
            <h3 className="pillar-title">University Leadership</h3>
            <p className="pillar-desc">
              Served as Senior Lecturer, Head of Department, and Dean of Faculty at KDU. Guided institutional development, curriculum planning, and academic publishing over an extensive three-decade career.
            </p>
            <div className="pillar-badges">
              <span className="pillar-badge">Dean (FMSH)</span>
              <span className="pillar-badge">Dept Head</span>
              <span className="pillar-badge">Senior Lecturer</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card pillar-card">
            <span className="pillar-tag">EDITORIAL EXPERTISE</span>
            <h3 className="pillar-title">Academic Polish</h3>
            <p className="pillar-desc">
              Recognized specialist in editing scholarly publications, dissertation proofreading, and official documentation. Noted translator, including the Sinhala translation of R.K. Narayan’s novel 'The Vendor of Sweets'.
            </p>
            <div className="pillar-badges">
              <span className="pillar-badge">Journal Editing</span>
              <span className="pillar-badge">Dissertations</span>
              <span className="pillar-badge">Book Translation</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card pillar-card">
            <span className="pillar-tag">CONSULTANCY</span>
            <h3 className="pillar-title">Advisory Services</h3>
            <p className="pillar-desc">
              Currently offers professional freelance language advisory. Specializes in guiding scholars on research argumentation, tutoring advanced literature students, and crafting biography memoirs.
            </p>
            <div className="pillar-badges">
              <span className="pillar-badge">Research Coaching</span>
              <span className="pillar-badge">Literature Lessons</span>
              <span className="pillar-badge">Biography Writing</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;
