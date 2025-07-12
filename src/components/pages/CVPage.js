import React from 'react';
import { User, Briefcase, Code, GraduationCap } from 'lucide-react';

// This component now receives cvData as a "prop" from App.js
function CVPage({ cvData }) {
  const { name, title, contact, summary, experience, skills, education } = cvData;

  // Helper component for sections
  const Section = ({ icon, title, children }) => (
    //  FIXED: Changed <Section> to <section> to prevent infinite loop
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-700 border-b-2 border-blue-200 pb-2 mb-4 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h2>
      {children}
    </section>
  );

  return (
    <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-lg p-8 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-slate-800">{name}</h1>
        <p className="text-xl text-blue-600 font-medium mt-2">{title}</p>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-6 text-slate-600">
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <span>{contact.linkedin}</span>
            <span>{contact.github}</span>
        </div>
      </header>

      <Section icon={<User size={24} className="text-blue-600" />} title="Profile Summary">
        <p className="text-slate-600 leading-relaxed">{summary}</p>
      </Section>

      <Section icon={<Briefcase size={24} className="text-blue-600" />} title="Work Experience">
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
            <p className="text-md text-slate-600 font-medium">{job.company} | {job.period}</p>
            <p className="text-slate-600 mt-2">{job.description}</p>
          </div>
        ))}
      </Section>

      <Section icon={<Code size={24} className="text-blue-600" />} title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </Section>

      <Section icon={<GraduationCap size={24} className="text-blue-600" />} title="Education">
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
            <p className="text-md text-slate-600">{edu.institution} | {edu.period}</p>
          </div>
        ))}
      </Section>
    </div>
  );
}

export default CVPage;
