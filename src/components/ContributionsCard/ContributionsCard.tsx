import { memo, useId, useState } from 'react';
import { contributionsData } from '../../constants/contributionsData';
import { ContributionPR, ContributionRepo } from '../../types/contribution';
import './ContributionsCard.css';

const RepoRow = memo(({ repo }: { repo: ContributionRepo }) => {
  const [expanded, setExpanded] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const prListId = useId();
  const slug = `${repo.org}/${repo.repo}`;
  const prCountLabel = `${repo.prs.length} PR${repo.prs.length !== 1 ? 's' : ''}`;

  return (
    <li className="repo-row">
      <div className="repo-row-header">
        <button
          type="button"
          className="repo-toggle cursor-target"
          aria-expanded={expanded}
          aria-controls={prListId}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} pull requests for ${slug}`}
          onClick={() => setExpanded((v) => !v)}
        >
          <i
            className={
              expanded ? 'fas fa-chevron-down' : 'fas fa-chevron-right'
            }
          ></i>
        </button>

        {logoFailed ? (
          <i
            className="fab fa-github repo-logo repo-logo-fallback"
            aria-hidden="true"
          ></i>
        ) : (
          <img
            className="repo-logo"
            src={`https://github.com/${repo.org}.png?size=80`}
            alt={`${repo.org} logo`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setLogoFailed(true)}
          />
        )}

        <a
          className="repo-link cursor-target"
          href={`https://github.com/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {slug}
        </a>

        <span className="repo-pr-count">{prCountLabel}</span>
      </div>

      {expanded && (
        <ul id={prListId} className="pr-list">
          {repo.prs.map((pr) => (
            <PRItem key={pr.url} pr={pr} repoSlug={slug} />
          ))}
        </ul>
      )}
    </li>
  );
});

RepoRow.displayName = 'RepoRow';

const PRItem = memo(
  ({ pr, repoSlug }: { pr: ContributionPR; repoSlug: string }) => {
    const iconClass =
      pr.status === 'merged'
        ? 'fas fa-code-merge pr-icon pr-icon-merged'
        : 'fas fa-code-pull-request pr-icon pr-icon-open';

    return (
      <li className="pr-item">
        <i
          className={iconClass}
          aria-label={pr.status}
          title={pr.status}
        ></i>
        <a
          className="pr-repo-link cursor-target"
          href={`https://github.com/${repoSlug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoSlug}
        </a>
        <a
          className="pr-link cursor-target"
          href={pr.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {pr.title}
        </a>
        <span className="pr-number">#{pr.number}</span>
      </li>
    );
  },
);

PRItem.displayName = 'PRItem';

const ContributionsCard = memo(() => (
  <div className="contributions-card">
    <div className="contributions-header">
      <h2 className="contributions-title cursor-target">
        Open Source Contributions
      </h2>
      <p className="contributions-tagline">
        Improving the tools and libraries I rely on.
      </p>
    </div>

    <ul className="contributions-list">
      {contributionsData.map((repo) => (
        <RepoRow key={`${repo.org}/${repo.repo}`} repo={repo} />
      ))}
    </ul>
  </div>
));

ContributionsCard.displayName = 'ContributionsCard';

export default ContributionsCard;
