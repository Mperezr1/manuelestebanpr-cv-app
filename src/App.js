import React, { useState } from 'react';

// Import components with paths relative to the src/ folder
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LoginPage from './components/pages/LoginPage';
import CVPage from './components/pages/CVPage';
import AdminDashboard from './components/pages/AdminDashboard';

const cvData = {
  name: "Johnathan Doe",
  title: "Senior Java Spring Boot Developer",
  contact: {
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  },
  summary: "A highly motivated and experienced Senior Java Developer with over 10 years of experience in designing, developing, and deploying robust, scalable, and high-performance applications using the Spring Framework. Proven ability to lead projects, mentor junior developers, and collaborate effectively with cross-functional teams to deliver high-quality software solutions.",
  experience: [
    {
      title: "Senior Spring Boot Developer",
      company: "Tech Solutions Inc.",
      period: "2018 - Present",
      description: "Led the development of microservices architecture for a high-traffic e-commerce platform. Designed and implemented RESTful APIs, integrated with various third-party services, and optimized database performance. Mentored a team of 5 junior developers.",
    },
    {
      title: "Java Developer",
      company: "Innovatech",
      period: "2014 - 2018",
      description: "Developed and maintained core components of a financial services application using Spring MVC, Hibernate, and Oracle DB. Wrote unit and integration tests to ensure code quality and reliability.",
    },
  ],
  skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "JPA", "Microservices", "RESTful APIs", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "React.js", "CI/CD"],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2012 - 2014",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      period: "2008 - 2012",
    }
  ],
};

const analyticsData = {
  totalViews: 1347,
  uniqueVisitors: 821,
  sectionTimings: [
    { name: 'Summary', time: 18 },
    { name: 'Experience', time: 35 },
    { name: 'Skills', time: 25 },
    { name: 'Education', time: 15 },
    { name: 'Contact', time: 7 },
  ],
  visitorSources: [
      { name: 'LinkedIn', value: 400 },
      { name: 'GitHub', value: 300 },
      { name: 'Direct', value: 300 },
      { name: 'Other', value: 200 },
  ]
};

export default function App() {
  const [page, setPage] = useState('cv');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = (targetPage) => {
    setPage(targetPage);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage('admin');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('cv');
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <LoginPage onAdminLogin={handleLogin} onGuestLogin={() => navigate('cv')} />;
      case 'admin':
        return isLoggedIn ? <AdminDashboard onLogout={handleLogout} analyticsData={analyticsData} /> : <LoginPage onAdminLogin={handleLogin} onGuestLogin={() => navigate('cv')} />;
      case 'cv':
      default:
        return <CVPage cvData={cvData} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Navbar
        isLoggedIn={isLoggedIn}
        navigate={navigate}
        onLogout={handleLogout}
        name={cvData.name}
      />
      <main className="p-4 md:p-8">
        {renderPage()}
      </main>
      <Footer name={cvData.name} />
    </div>
  );
}