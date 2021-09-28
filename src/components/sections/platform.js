import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledPlatformSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0;

  .sub-header {
    color: var(--white);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .wrapper {
    margin-top: 120px;

  }


  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--white);
    font-size: var(--fz-sm);    
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

`;

const Platform = () => {
  const revealContainer = useRef(null);
  const revealSubheader = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
    sr.reveal(revealSubheader.current, srConfig());
  }, []);

  const skills = ['High altitude', 'Wow', 'So much geospatial', 'Eleventy', 'Amazing', 'Very space'];

  return (
    <div 
      id="platform"
      className="relative overflow-hidden" 
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9)), url(https://source.unsplash.com/HWIOLU7_O6w)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <StyledPlatformSection ref={revealContainer}>

        <h4 className="overline">Coming Soon</h4>

        <h2 >Mapping and image explorer</h2>

        <p className="sub-header" ref={revealSubheader}>
          Monitor fields and remote assets using imagery and data visualization.
        </p>

        <div className="wrapper">
          <StaticImage
            className="img"
            src="../../images/platform/platform-search-1.jpg"
            width={900}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Headshot"
          />
        </div>
      </StyledPlatformSection>
    </div>
  );
};

export default Platform;
