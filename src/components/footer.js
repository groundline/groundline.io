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

  .cont-links{
    padding: 20px;
  }

  .logo {
    display: contents;

    a {
      width: 30px;
    }
  }


  .links .links-wrapper{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .links .footer-nav-wrapper{
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  
  .footer-row
  {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .links .footer-nav-wrapper .link-group{
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    width: 49%;
    padding-right: 20px;
    margin: 0;
  }

  .links span{
    display: block;
  }

  .links .footer-nav-wrapper .link-group > .footer-link-wrapper{
    
  }

  .links span:first-child{
    font-weight: bold;
  }

  .links a{
    color: #fff;
    font-weight: 100;
  }

  .links .title{
    text-transform: uppercase;
  }

  .links .connect{
    width: 418px;
    flex: 0 0 auto;
  }

  .links .connect span{
    display: block;
  }

  .links .connect .logo{
    height: 80px;
    float: none;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .links .connect .title-follow-us-wrapper{
    padding: 20px 0px 10px 0px;
  }

  .links .connect .footer-social-icons-wrapper img{
    height: 71px;
    width: 71px;
  }
  
  .footer-container
  {
    vertical-align: top;
    display: inline-block;
    width: 49%;
  }
  @media (max-width: 960px)
  {
    .footer-container
    {
      width:100%;
      margin: 0;
      padding: 0;
    }
  }
`;

const StyledSocialLinks = styled.div`
  display: none;

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

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;


const Logo = (
  <div className="logo" tabIndex="-1">
    <Link to="/" aria-label="home">
      <IconLogo style = {{ width: "inherit", height:"inherit"}} />
    </Link>
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

      <div class="links">
        <div class="cont cont-links">
          <div class="links-wrapper">
            <div class="footer-nav-wrapper">
            <div class="footer-row">
              <div class="footer-container">

                <div class="link-group about">
                  <span>Solutions</span>
                  <span class="footer-link-wrapper"><a href="#technology" class="link-1">Technology</a></span>
                  <span class="footer-link-wrapper"><a href="about/whoarewe/index.php" class="link-2">Who Are We</a></span>
                  <span class="footer-link-wrapper"><a href="about/team/index.php" class="link-3">Meet The Team</a></span>
                </div>
                <div class="link-group community">
                  <span>Developer</span>
                  <span class="footer-link-wrapper"><a href="blog/index.php" class="link-1">Blog</a></span>
                  <span class="footer-link-wrapper"><a href="forum/index.php" class="link-2">Forum</a></span>
                  <span class="footer-link-wrapper"><a href="youtubevideos/index.php" class="link-3">TechPocket</a></span>
                </div>
              </div>
              <div class="footer-container">

                <div class="link-group support">
                  <span>Company</span>
                  <span class="footer-link-wrapper"><a href="donate/index.php" class="link-1">Donate</a></span>
                  <span class="footer-link-wrapper"><a href="report/index.php" class="link-2">Report An Issue</a></span>
                </div>
                <div class="link-group contact-us">
                  <span>Contact Us</span>
                  <span class="footer-link-wrapper"><a href="contactus/index.php" class="link-1">Leave A Message</a></span>
                  <span class="footer-link-wrapper"><a href="privacy/index.php" class="link-2">Privacy Policy</a></span>
                  <span class="footer-link-wrapper"><a href="terms/index.php" class="link-3">Terms Of Service</a></span>
                </div>
              
              </div>

            </div>
            
            </div>
            <div class="connect">
              <div class="brief-page-info">{Logo} Groundline</div>
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
            </div>
          </div>
        </div>
      </div>

        {/*
      

      <StyledCredit tabindex="-1">
        <a href="https://github.com/groudnline">
          <div>Groundline</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </StyledCredit>
          */}
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
