// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import SubscribeModal from '../subscribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';

const HomeNavRaise = css`
@media (min-width: 900px) {
position: relative;
top: -70px;
}
`;

const SiteNavStyles = css`
position: relative;
z-index: 300;
display: flex;
justify-content: space-between;
align-items: flex-start;
overflow-y: hidden;
height: 40px;
font-size: 1.2rem;
@media (max-width: 650px) {
display: flex;
height: unset;
}
`;

const SiteNavLeft = styled.div`
display: flex;
align-items: center;
overflow-x: auto;
overflow-y: hidden;
-webkit-overflow-scrolling: touch;
margin-right: 10px;
padding-bottom: 80px;
letter-spacing: 0.4px;
white-space: nowrap;

-ms-overflow-scrolling: touch;

@media (max-width: 700px) {
margin-right: 0;
padding-left: 4vw;
}
@media (max-width: 650px) {
padding-top: 0px;
padding-bottom: 0px;
}
`;

const NavStyles = css`
display: flex;
margin: 0 0 0 -12px;
padding: 0;
list-style: none;

li {
display: block;
margin: 0;
padding: 0;
text-transform: uppercase;
}

li a {
display: block;
margin: 0;
padding: 10px 12px;
color: #fff;
opacity: 1;
font-weight: 500;
}

li a:hover {
text-decoration: none;
opacity: 1;
}
@media (max-width: 650px) {
display: block;
padding-top: 25px;
padding-bottom: 20px;
}
`;


const NavStyles2 = css`
display: flex;
margin: 0 0 0 -12px;
padding: 0;
list-style: none;

li {
display: block;
margin: 0;
padding: 0;
text-transform: uppercase;
}

li a {
display: block;
margin: 0;
padding: 10px 12px;
color: #fff;
opacity: 1;
font-weight: 500;
}

li a:hover {
text-decoration: none;
opacity: 1;
}
@media (max-width: 700px) {
display: none;
}
`;

const SiteNavRight = styled.div`
flex-shrink: 0;
display: flex;
align-items: center;
height: 40px;
`;

const SocialLinks = styled.div`
flex-shrink: 0;
display: flex;
align-items: center;
a:last-of-type {
padding-right: 20px;
}
@media (max-width: 700px) {
  display: none !important;
  }
`;

const SubscribeButton = styled.a`
display: block;
padding: 4px 10px;
border: #fff 1px solid;
color: #fff;
font-size: 1.2rem;
line-height: 1em;
border-radius: 10px;
opacity: 0.8;

:hover {
text-decoration: none;
opacity: 1;
cursor: pointer;
}
`;



interface SiteNavProps {
isHome?: boolean;
}

class SiteNav extends React.Component<SiteNavProps> {

  subscribe = React.createRef<SubscribeModal>();

    openModal = () => {
    if (this.subscribe.current) {
    this.subscribe.current.open();
    }
    };


    render() {
    const { isHome = false } = this.props;

    return (
    <nav css={[isHome && HomeNavRaise, SiteNavStyles]}>
      <SiteNavLeft>

        {/* logo when not homepage */}
        {!isHome &&
        <SiteNavLogo />}

        {/* nav menu when not homepage and not mobile */}
        {!isHome &&
        <ul css={NavStyles2} role="menu">
          {/* TODO: mark current nav item - add class nav-current */}
     
          <li role="menuitem">
            <Link to="/tags/lajme">Lajme</Link>
          </li>
          <li role="menuitem">
            <Link to="/tags/revizione">Revizione</Link>
          </li>
          <li role="menuitem">
            <Link to="/tags/riparime">Riparime</Link>
          </li>
          <li role="menuitem">
            <Link to="/tags/video">Video</Link>
          </li>
        </ul>
        }


        {/* nav menu homepage */}
        {isHome &&
        <ul css={NavStyles} role="menu">
          {/* TODO: mark current nav item - add class nav-current */}
          <li role="menuitem">
            <Link to="/tags/lajme">Lajme</Link>
          </li>
          <li role="menuitem">
            <Link to="/tags/revizione">Revizione</Link>
          </li>
          <li role="menuitem">
            <Link to="/tags/riparime">Riparime</Link>
          </li>
          <li role="menuitem">
            <Link to="/tags/video">Video</Link>
          </li>
        </ul>
        }

      </SiteNavLeft>


      {isHome &&
      <SiteNavRight>
        <SocialLinks>
          {config.facebook && (
          <a css={SocialLink} href={config.facebook} target="_blank" title="Facebook" rel="noopener noreferrer">
            <Facebook />
          </a>
          )}
          {config.twitter && (
          <a css={SocialLink} href={config.twitter} title="Twitter" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          )}
        </SocialLinks>
      </SiteNavRight>
      }

      {!isHome &&

      <SiteNavRight>
        {config.showSubscribe && (
        <SubscribeButton onClick={this.openModal}>Menu</SubscribeButton>
        )}
        {config.showSubscribe &&
        <SubscribeModal ref={this.subscribe} />}

      </SiteNavRight>


      }

    </nav>
    );
    }
    }

    export default SiteNav;