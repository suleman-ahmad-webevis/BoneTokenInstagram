import React from 'react'
import styled from 'styled-components'
import BlogCards from '../../components/Blogs/BlogCards'
import BlogSidebar from '../../components/Blogs/BlogSidebar'
import BlogSlider from '../../components/Blogs/BlogSlider'

const Blogs = () => {
  return (
    <BlogsContainer>
        <BlogSidebar />
        <BlogsContent>
          <BlogSlider />
          <BlogCards />
        </BlogsContent>
    </BlogsContainer>
  )
}

export const BlogsContainer = styled.div`
display: flex;
justify-content: center;
grid-gap: 60px;
padding: 30px;
background: #F5F5F5;
`;

export const BlogsContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
grid-gap: 30px;
padding: 30px;
background: #F5F5F5;
`;

export default Blogs