import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, ButtonLink, Logo, Feature, Text, FeatureCallOut, PlayButton, Link } from './styles/header';

export default function Header({ bg = true, children, ...restProps}){
    return bg? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.Feature = function HeaderFeature({children,...restProps}){
    return <Feature {...restProps}>{children}</Feature>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({children,...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text= function HeaderText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>;
};
Header.ButtonLink = function HeaderButtonLink({children,...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({to,...restProps}){
    return <ReactRouterLink to={to}><Logo {...restProps} /></ReactRouterLink>;
};
Header.PlayButton= function HeaderPlayButton({children,...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.TextLink= function HeaderTextLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>;
};