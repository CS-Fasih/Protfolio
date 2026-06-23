export default function TechMarquee() {
  const skills = [
    "Python", "React", "PyTorch", "Node.js", "TypeScript", 
    "MongoDB", "Docker", "Tailwind CSS", "Next.js", "Vite", 
    "Express", "PostgreSQL", "Hugging Face", "C/C++", "Cybersecurity"
  ];

  return (
    <div className="tech-marquee">
      <div className="tech-marquee__content">
        {/* Render twice for seamless infinite scrolling loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="tech-marquee__badge">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
