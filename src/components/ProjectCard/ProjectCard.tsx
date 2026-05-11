import { memo, useCallback, useEffect, useMemo, useState } from 'react';
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

/**
 * Returns whether the given impress step is currently the active one.
 *
 * Why this exists: impress.js keeps every step mounted in 3D space — even
 * off-camera ones. Animated GIFs in off-camera steps keep advancing frames on
 * the main thread, which competes with impress's transition animation and
 * blocks input. We use this hook to only mount animated previews on the
 * active slide, leaving the placeholder up while the slide is parked off-
 * camera.
 *
 * Bails out via React's setState identity check, so the 5 ProjectCards
 * listening to the same event only re-render the two that actually change
 * (entering + leaving).
 */
function useIsStepActive(stepId: string): boolean {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Pick up the initial step from the URL hash before impress fires events.
    const initialHash = window.location.hash.slice(1).replace('/', '');
    if (initialHash === stepId) {
      setIsActive(true);
    }

    const handler = (e: Event) => {
      setIsActive((e.target as Element).id === stepId);
    };
    document.addEventListener('impress:stepenter', handler);
    return () => document.removeEventListener('impress:stepenter', handler);
  }, [stepId]);

  return isActive;
}

const ProjectCard = memo(({ project }: { project: Project }) => {
  const isReverse = project.layout === 'reverse';
  const isActive = useIsStepActive(project.id);
  const isAnimatedPreview = useMemo(
    () => project.preview?.toLowerCase().endsWith('.gif') ?? false,
    [project.preview],
  );
  // Mount the <img> for static previews always (cheap — decode once, cached).
  // Animated GIFs only mount on the active slide, to avoid the continuous
  // frame-decode tax on off-camera slides.
  const shouldRenderImage =
    !!project.preview && (!isAnimatedPreview || isActive);

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
        {shouldRenderImage ? (
          <img
            className="project-image"
            src={project.preview}
            alt={project.title}
            decoding="async"
          />
        ) : (
          <div
            className="project-image project-image-placeholder"
            aria-label={`${project.title} preview pending`}
          >
            <i className="fas fa-image" aria-hidden="true"></i>
          </div>
        )}
      </div>
    ),
    [project.preview, project.title, shouldRenderImage],
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
