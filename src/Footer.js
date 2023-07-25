// Footer.js
import { BorderAll } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  a {
    margin: 10px;
    color: #333;
    transition: color 0.2s;

    @media (max-width: 600px) {
      margin: 5px;
    }

    &:hover {
      color: #0077b5;
    }
  }
`;

const CopyrightText = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #666;
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-container">
        <SocialIconsContainer>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/singhharsh14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg" alt="LinkedIn" width="120" />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/HarshSingh21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" border-radius=
            "100%" />
          </a>
        </SocialIconsContainer>
        <CopyrightText>© Harsh Singh</CopyrightText>
      </div>
    </FooterContainer>
  );
}

export default Footer;
