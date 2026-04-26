import { SLIDE_IDS } from '../../constants/slideIds';
import { Position } from '../../types/project';
import ContributionsCard from '../ContributionsCard/ContributionsCard';

interface ContributionsSlideProps {
  position: Position;
}

const ContributionsSlide = ({ position }: ContributionsSlideProps) => {
  const slideProps: { [key: string]: string | number } = {
    'data-x': position.x,
    'data-y': position.y,
    'data-z': position.z || 0,
  };

  if (position.rotate) {
    slideProps['data-rotate'] = position.rotate;
  }
  if (position.rotateY) {
    slideProps['data-rotate-y'] = position.rotateY;
  }

  return (
    <div id={SLIDE_IDS.OPEN_SOURCE} className="step" {...slideProps}>
      <ContributionsCard />
    </div>
  );
};

export default ContributionsSlide;
