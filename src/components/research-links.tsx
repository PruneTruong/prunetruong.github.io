/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Arxiv, Github, Youtube } from '@icons-pack/react-simple-icons';
import { FC } from 'react';
import theme from '../gatsby-plugin-theme-ui';

interface ResearchPostLinksProps {
  links: Array<{
    type: string;
    link: string;
  }>;
  className: string;
  size: number;
}

const LINK_ICON_COLOR = theme.colors.secondary;
const LINKS_ICON_MAP = {
  youtube: size => <Youtube size={size} color={LINK_ICON_COLOR} />,
  arxiv: size => <Arxiv size={size} color={LINK_ICON_COLOR} />,
  github: size => <Github size={size} color={LINK_ICON_COLOR} />
} as const;

const ResearchLinks: FC<ResearchPostLinksProps> = ({className = '', links, size = 24}) => {
  return <div className={className}>
    {links.map(({type, link}) =>
      (<a href={link} key={type}>
        {LINKS_ICON_MAP[type](size) || type}
      </a>)
    )}
  </div>
}

export default ResearchLinks
