import React from 'react'

export default function AboutMe() {
  const birthday = "1998-05-07";

  const birthDate = new Date(birthday);
  const experience = Math.floor((birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000) - 22);

  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      color: 'var(--card-text)',
      borderColor: 'var(--border)'
    }}
      className="w-full p-5 shadow-md rounded " >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="space-y-4">
        <p>
          Throughout my {experience}-year journey in software development, I've built expertise in:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full-stack web applications</li>
          <li>Mobile app development</li>
          <li>Desktop software solutions</li>
          <li>Agile development methodologies</li>
        </ul>
        <p>
          My experience spans the complete software development lifecycle, from requirement
          analysis to deployment and maintenance. I leverage modern technologies and best
          practices to deliver scalable, efficient, and user-centric solutions.
        </p>
      </div>
    </div>
  );
}