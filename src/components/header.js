import React from 'react';

import {
    EuiHeader,
    EuiHeaderSectionItem,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiIcon
  } from '@elastic/eui';
  

const Header = () => {


    return (
        <EuiHeader>
          <EuiHeaderSectionItem border="right">
            <EuiHeaderLogo  iconType="cloudStormy" color="red">Weather-App</EuiHeaderLogo>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            <EuiHeaderLink href="#" style={{fontSize:'1.2rem'}}>
              <i class="fab fa-github-square"></i> GitHub
              </EuiHeaderLink>
          </EuiHeaderSectionItem>
        </EuiHeader>
    )
}

export default Header

