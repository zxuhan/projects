import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { GITHUB_TOKEN } from '../../constants/userConfig';
import { GitHubRepoInfo, Link, Project } from '../../types/project';
import './ProjectCard.css';

const GitHubStats = memo(
  ({
    repoInfo,
    loading,
  }: {
    repoInfo: GitHubRepoInfo | null;
    loading: boolean;
  }) => {
    if (loading) {
      return (
        <div className={`github-stats animate`}>
          <div className="loading-stats">
            <i className="fas fa-spinner fa-spin"></i>
            <span>Loading repository info...</span>
          </div>
        </div>
      );
    }

    if (!repoInfo?.language) {
      return null;
    }

    return (
      <div className={`github-stats animate`}>
        <div className="repo-meta">
          <div className="meta-item cursor-target">
            <span>{repoInfo.language}</span>
          </div>
        </div>
      </div>
    );
  },
);

GitHubStats.displayName = 'GitHubStats';

const ProjectLinks = memo(
  ({
    links,
    loading,
  }: {
    links: Link[];
    loading: boolean;
  }) => (
    <div className={`project-links ${loading ? 'animate' : ''}`}>
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
  ),
);

ProjectLinks.displayName = 'ProjectLinks';

const ProjectCard = memo(({ project }: { project: Project }) => {
  const isReverse = project.layout === 'reverse';
  const [repoInfo, setRepoInfo] = useState<GitHubRepoInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const githubRepo = project.links.find(
    (link) => link.type === 'code' && link.githubRepo,
  )?.githubRepo;

  useEffect(() => {
    (async () => {
      if (!githubRepo) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(
          `https://api.github.com/repos/${githubRepo}`,
          {
            headers: {
              Authorization: `bearer ${GITHUB_TOKEN.replaceAll("?", "")}`,
              Accept: 'application/json',
            },
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setRepoInfo({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          issues: data.open_issues_count || 0,
          language: data.language || '',
          license: data.license?.name || null,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub repo info:', error);
        setRepoInfo({
          stars: 0,
          forks: 0,
          issues: 0,
          language: '',
          license: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const techTags = useMemo(
    () => (
      <div className={`project-tech ${loading ? 'animate' : ''}`}>
        {project.tech.map((tech: string, index: number) => (
          <span key={index} className="tech-tag cursor-target">
            {tech}
          </span>
        ))}
      </div>
    ),
    [project.tech, loading],
  );

  const InfoSection = useCallback(
    () => (
      <div className="project-info">
        <h2 className={`cursor-target ${loading ? 'animate' : ''}`}>
          {project.title}
        </h2>
        <p className={`project-description ${loading ? 'animate' : ''}`}>
          {project.description}
        </p>
        {techTags}

        {githubRepo && <GitHubStats repoInfo={repoInfo} loading={loading} />}

        <ProjectLinks
          links={project.links}
          loading={loading}
        />
      </div>
    ),
    [
      project.title,
      project.description,
      techTags,
      repoInfo,
      loading,
      project.links,
    ],
  );

  const PreviewSection = useCallback(
    () => (
      <div
        className={`project-preview cursor-target ${loading ? 'animate' : ''}`}
      >
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
