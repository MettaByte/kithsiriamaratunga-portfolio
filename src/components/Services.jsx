import React from 'react';
import { Languages, BookOpen, PenTool, GraduationCap } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: "Translation",
    icon: <Languages size={32} />,
    items: [
      "Translation of books, academic texts, and professional documents between English and Sinhala",
      "Editing and linguistic refinement of translated material"
    ]
  },
  {
    title: "Academic Editing & Writing",
    icon: <BookOpen size={32} />,
    items: [
      "Editing and proofreading journal articles",
      "Editing theses and dissertations",
      "Editing academic books and research publications",
      "Assistance in preparing manuscripts for publication"
    ]
  },
  {
    title: "Biography & Editorial",
    icon: <PenTool size={32} />,
    items: [
      "Writing biographies and institutional histories",
      "Editorial consultancy for books and scholarly publications"
    ]
  },
  {
    title: "Language & Communication Training",
    icon: <GraduationCap size={32} />,
    items: [
      "English language improvement for professionals and students",
      "Academic writing and communication skills training",
      "Individual or small-group classes (online or in person)",
      "Teaching English literature to advanced learners"
    ]
  }
];

const Services = () => {
  return (
    <section className="section" id="services" style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container">
        <h2 className="section-title">Professional Services Offered</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="glass-card service-card" key={index} style={{backgroundColor: 'var(--bg-primary)'}}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
