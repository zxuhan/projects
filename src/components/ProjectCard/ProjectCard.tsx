import { memo, useCallback, useMemo } from 'react';
import { Link, Project } from '../../types/project';
import './ProjectCard.css';

const ProjectLinks = memo(({ links }: { links: Link[] }) => (
  <div className="project-links animate">
    {links.map((link: Link, index: number) => (
      <a
        key={index}
        href={link.url}
        className={`project-link cursor-target ${link.type === 'demo' ? '' : 'secondary'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={
            link.type === 'demo'
              ? 'fas fa-external-link-alt'
              : 'fab fa-github'
          }
        ></i>
        {link.text}
      </a>
    ))}
  </div>
));

ProjectLinks.displayName = 'ProjectLinks';

const ProjectCard = memo(({ project }: { project: Project }) => {
  const isReverse = project.layout === 'reverse';

  const techTags = useMemo(
    () => (
      <div className="project-tech animate">
        {project.tech.map((tech: string, index: number) => (
          <span key={index} className="tech-tag cursor-target">
            {tech}
          </span>
        ))}
      </div>
    ),
    [project.tech],
  );

  const topicTags = useMemo(
    () => (
      <div className="project-topics animate">
        {project.topics.map((topic: string, index: number) => (
          <span key={index} className="topic-tag cursor-target">
            #{topic}
          </span>
        ))}
      </div>
    ),
    [project.topics],
  );

  const InfoSection = useCallback(
    () => (
      <div className="project-info">
        <h2 className="cursor-target animate">{project.title}</h2>
        <p className="project-description animate">{project.description}</p>
        {techTags}
        {topicTags}
        <ProjectLinks links={project.links} />
      </div>
    ),
    [project.title, project.description, techTags, topicTags, project.links],
  );

  const PreviewSection = useCallback(
    () => (
      <div className="project-preview cursor-target animate">
        <img
          className="project-image"
          src={project.preview}
          alt={project.title}
          loading="lazy"
        />
      </div>
    ),
    [project.preview, project.title],
  );

  return (
    <div className="project-card">
      {isReverse ? (
        <>
          <PreviewSection />
          <InfoSection />
        </>
      ) : (
        <>
          <InfoSection />
          <PreviewSection />
        </>
      )}
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
