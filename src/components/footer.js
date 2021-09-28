import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';
import { Link } from 'gatsby';
import { IconLogo } from '@components/icons';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  padding: 15px;
  text-align: center;
  padding: 20px;
  margin: 50px 0;

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 100%;
  }

  .footer-column {
    text-align: left;
    margin-bottom: 20px;
    p {
      margin: 0;    
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }
  }

  .footer-details {
    text-align: center;
  }
  
  @media (max-width: 1024px) {
    .footer-grid {
      padding-left: 20px;
    }
  }

  .logo {
    display: contents;
    margin-bottom: 20px;

    a {
      width: 20px;
    }

    .logo-text {
      display:inline-block;
      margin-left: 8px;
    }
  }

`;

const StyledSocialLinks = styled.div`

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;


const Logo = (
  <div className="logo" tabIndex="-1">
    <Link to="/" aria-label="home">
      <IconLogo style = {{ width: "inherit", height:"inherit"}} />
    </Link>
    <span className="logo-text">Groundline</span>
  </div>
);

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/groundline')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <StyledFooter>

      <div class="footer-grid">
        
        <div class="footer-column footer-1">
          <h4>Solutions</h4>
          <p>Platform</p>
          <p>Industries</p>
          <p>Contact Us</p>
        </div>

        <div class="footer-column footer-2">
          <h4>Developers</h4>
          <p>Documentation</p>
          <p>User Guide</p>
          <p>API</p>
        </div>

        <div class="footer-column footer-3">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div class="footer-column footer-details">
          <div class="logo-wrapper">{Logo}</div>
          <StyledSocialLinks>
            <ul>
              {socialMedia &&
                socialMedia.map(({ name, url }, i) => (
                  <li key={i}>
                    <a href={url} aria-label={name}>
                      <Icon name={name} />
                    </a>
                  </li>
                ))}
            </ul>
          </StyledSocialLinks>
          <p>© 2021. All Rights Reserved</p>
        </div>
      </div>

    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
