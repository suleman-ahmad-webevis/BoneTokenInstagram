import React from 'react'
import styled from 'styled-components'
import { Img } from '../../GlobalStyles';
import CardImage from '../../assets/images/Blogs/CardImage.png'
import Share from '../../assets/images/Blogs/Share.png'
import BookMark from '../../assets/images/Blogs/BookMark.png'
import PopularIcon from '../../assets/images/Blogs/PopularIcon.png'

const BlogCards = () => {
  return (
    <BlogCardsContainer>
        <BlogCard>
            <Img src={CardImage} alt="CardImage" />
            <BlogCardTitle>
                <h2>Doberman care</h2>
                <h4>Dog/Rottweiler </h4>
            </BlogCardTitle>
            <BlogCardContent>
                Sleek and powerful, possessing both a magnificent <br />
                physique and keen intelligence, the Doberman Pinscher <br />
                is one of dogkind's noblemen. This incompar...
            </BlogCardContent>
            <BlogCardFooter>
                <CardDate>
                    <h3>TeamTeam</h3>
                    <h3>19.03.2022</h3>
                </CardDate>
                <CardShareIcons>
                    <ShareIcon><Img src={Share} alt="Share" /></ShareIcon>
                    <ShareIcon><Img src={BookMark} alt="BookMark" /></ShareIcon>
                </CardShareIcons>
            </BlogCardFooter>
            <Popular><Img src={PopularIcon} alt="PopularIcon" /> Popular</Popular>
        </BlogCard>
        <BlogCard>
            <Img src={CardImage} alt="CardImage" />
            <BlogCardTitle>
                <h2>Doberman care</h2>
                <h4>Dog/Rottweiler </h4>
            </BlogCardTitle>
            <BlogCardContent>
                Sleek and powerful, possessing both a magnificent <br />
                physique and keen intelligence, the Doberman Pinscher <br />
                is one of dogkind's noblemen. This incompar...
            </BlogCardContent>
            <BlogCardFooter>
                <CardDate>
                    <h3>TeamTeam</h3>
                    <h3>19.03.2022</h3>
                </CardDate>
                <CardShareIcons>
                    <ShareIcon><Img src={Share} alt="Share" /></ShareIcon>
                    <ShareIcon><Img src={BookMark} alt="BookMark" /></ShareIcon>
                </CardShareIcons>
            </BlogCardFooter>
        </BlogCard>
    </BlogCardsContainer>
  )
}

export const BlogCardsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 20px;
grid-gap: 30px;
`;

export const BlogCard = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
grid-gap: 20px;
background: #FFFFFF;
border-radius: 12px;
`;

export const BlogCardTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

h2{
    font-family: 'Urbanist-Regular';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 160%;
    color: #000F5C;
}
h4{
    font-family: 'Urbanist-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    color: #000000;
}
`;

export const BlogCardContent = styled.div`
font-family: 'Urbanist-Regular';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 160%;
color: #000000;
`;

export const BlogCardFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const CardDate = styled.div`
display: flex;
grid-gap: 20px;
align-items: center;

h3{
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000F5C;
}
`;

export const CardShareIcons = styled.div`
display: flex;
grid-gap: 20px;
align-items: center;
`;

export const ShareIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 29px;
height: 29px;
border: 1px solid #000000;
border-radius: 360px;
cursor: pointer;
`;

export const Popular = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 105px;
height: 34px;
background: #FEE96C;
border-radius: 15px;

font-family: 'Urbanist-Regular';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 160%;
color: #000000;
position: absolute;
cursor: pointer;
`;

export default BlogCards