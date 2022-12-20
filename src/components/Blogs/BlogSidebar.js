import React from 'react'
import styled from 'styled-components';

const Dogs = ['Rottweiler (2)',"Doberman (8)","Amstaff (9)",
              "Poodle (11)","Chihuahua (20)","Doberman (34)",
              "Amstaff (1)","Poodle (2)","Chihuahua (3)","Rottweiler (4)",
              "Doberman (5)","Amstaff (12)"
             ];

const BlogSidebar = () => {
  return (
    <BlogSidebarContainer>
        <SidebarTitle FontWeight>Categories</SidebarTitle>
        <SidebarDivider />
        <SidebarTitle>Dog</SidebarTitle>
        <DogsList>
            {Dogs.map((item, index) =>
                <DogTypes key={index}>{item}</DogTypes>
            )}
        </DogsList>
        <SidebarTitle>Crypto</SidebarTitle>
        <SidebarTitle>News</SidebarTitle>
        <SidebarTitle>Sales</SidebarTitle>
    </BlogSidebarContainer>
  )
}

export const BlogSidebarContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px;
gap: 14px;
width: 278px;
height: 646px;
background: #FFFFFF;
border-radius: 12px;
`;

export const SidebarTitle = styled.div`
font-family: 'Urbanist-Regular';
font-style: normal;
font-weight: ${({FontWeight}) => FontWeight ? "600" : "800"};
font-size: 18px;
line-height: 160%;
color: #000F5C;
cursor: pointer;
`;

export const SidebarDivider = styled.div`
width: 238px;
height: 0px;
border: 1px solid #000F5C;
`;

export const DogsList = styled.div`
margin-bottom: 10px;
`;

export const DogTypes = styled.div`
font-family: 'Urbanist-Regular';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 160%;
color: #000000;
cursor: pointer;
`;

export default BlogSidebar