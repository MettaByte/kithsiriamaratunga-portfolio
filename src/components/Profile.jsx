import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="section" id="profile">
      <div className="container">
        <h2 className="section-title">Professional Profile</h2>
        
        <div className="glass-card profile-text">
          <p>
            Former <span className="highlight-text">Senior Lecturer in English</span> at General Sir John Kotelawala Defence University (KDU), Sri Lanka, with over <span className="highlight-text">three decades of experience</span> in English language teaching, academic writing, translation, and university administration.
          </p>
          <p>
            Throughout an extensive academic career, provided leadership in curriculum development, academic publishing, research conferences, and institutional documentation. Possesses recognised expertise in <span className="highlight-text">editing scholarly publications, drafting official documents, translation between English and Sinhala</span>, and teaching English language and literature.
          </p>
          <p>
            Currently engaged in <span className="highlight-text">freelance academic and language consultancy</span>, offering professional services in translation, academic editing, biography writing, and English language training for students, academics, and professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
