import React from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import c1 from "../../assets/images/Categories/C1.png";
import c2 from "../../assets/images/Categories/C2.png";
import c3 from "../../assets/images/Categories/C3.png";
import c4 from "../../assets/images/Categories/C4.png";
import c5 from "../../assets/images/Categories/C5.png";
import c6 from "../../assets/images/Categories/C6.png";
import c7 from "../../assets/images/Categories/C7.png";
import c8 from "../../assets/images/Categories/C8.png";
import c9 from "../../assets/images/Categories/C9.png";
import c10 from "../../assets/images/Categories/C10.png";
import c11 from "../../assets/images/Categories/C11.png";
import c12 from "../../assets/images/Categories/C12.png";
import c13 from "../../assets/images/Categories/C13.png";
import c14 from "../../assets/images/Categories/C14.png";
import c15 from "../../assets/images/Categories/C15.png";
import c16 from "../../assets/images/Categories/C16.png";
import c17 from "../../assets/images/Categories/C17.png";
import c18 from "../../assets/images/Categories/C18.png";
import c19 from "../../assets/images/Categories/C19.png";
import c20 from "../../assets/images/Categories/C20.png";
import c21 from "../../assets/images/Categories/C21.png";
import c22 from "../../assets/images/Categories/C22.png";
import i1 from "../../assets/images/Categories/vetbeds.png";
import i2 from "../../assets/images/Categories/cratecushions.png";
import i3 from "../../assets/images/Categories/cratesandcages.png";
import i4 from "../../assets/images/Categories/carbox.png";
import i5 from "../../assets/images/Categories/beds.png";
import i6 from "../../assets/images/Categories/puppypens.png";
import i7 from "../../assets/images/Categories/houses.png";
import i8 from "../../assets/images/Categories/snacks.png";
import i9 from "../../assets/images/Categories/toys.png";
import i10 from "../../assets/images/Categories/groomingtables.png";
import i11 from "../../assets/images/Categories/vehicleramps.png";
import i12 from "../../assets/images/Categories/runningmachines.png";
import i13 from "../../assets/images/Categories/strollers.png";
import i14 from "../../assets/images/Categories/feedingbowls.png";
import i15 from "../../assets/images/Categories/dogshowtrolley.png";
import i16 from "../../assets/images/Categories/baths.png";
import i17 from "../../assets/images/Categories/dogshowtent.png";
import i18 from "../../assets/images/Categories/whelpingboxes/whelping.png";
import i19 from "../../assets/images/Categories/whelpingboxes/boxes.png";
import i20 from "../../assets/images/Categories/agility.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getTheProducts, reset } from "../../redux/product/productSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const [page] = useState(1);
  const [limit] = useState(10);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <CategoriesContainer>
      <HoverWrapper>
        <Img src={c1} alt="Category-1" />
        {
          <HoverButton>
            <img
              alt="vetBed"
              src={i1}
              onClick={() => {
                dispatch(reset());
                setSearchParams({ category: "vetBed" });
                dispatch(getTheProducts({ category: "vetBed", page, limit }));
              }}
            />
          </HoverButton>
        }
      </HoverWrapper>
      <HoverWrapper>
        <Img src={c2} alt="Category-2" />
        {
          <HoverButton>
            <img
              src={i2}
              alt="crateCushions"
              onClick={() => {
                dispatch(reset());
                setSearchParams({ category: "crateCushions" });
                dispatch(
                  getTheProducts({ category: "crateCushions", page, limit })
                );
              }}
            />
          </HoverButton>
        }
      </HoverWrapper>
      <CombineCategories>
        <CategoryRight>
          <HoverWrapper>
            <Img src={c3} alt="Category-3" />
            {
              <HoverButton left>
                <img
                  src={i3}
                  alt="cratesAndCages"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "cratesAndCages" });
                    dispatch(
                      getTheProducts({
                        category: "cratesAndCages",
                        page,
                        limit,
                      })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryRight>
        <CategoryLeft Padding>
          <HoverWrapper>
            <Img src={c4} alt="Category-4" />
            {
              <HoverButton>
                <img
                  src={i4}
                  alt="carBox"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "carBox" });
                    dispatch(
                      getTheProducts({ category: "carBox", page, limit })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryLeft>
      </CombineCategories>
      <CombineCategories>
        <CategoryRight>
          <HoverWrapper>
            <Img src={c5} alt="Category-5" />
            {
              <HoverButton>
                <img
                  src={i4}
                  alt="carBox"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "carBox" });
                    dispatch(
                      getTheProducts({ category: "carBox", page, limit })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryRight>
        <CategoryLeft Margin>
          <HoverWrapper>
            <Img src={c6} alt="Category-6" />
            {
              <HoverButton>
                <img
                  src={i3}
                  alt="cratesAndCages"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "cratesAndCages" });
                    dispatch(
                      getTheProducts({
                        category: "cratesAndCages",
                        page,
                        limit,
                      })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryLeft>
      </CombineCategories>
      <CombineCategories Margin>
        <CategoryRight>
          <HoverWrapper>
            <Img src={c7} alt="Category-7" />
            {
              <HoverButton>
                <img
                  src={i5}
                  alt="beds"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "beds" });
                    dispatch(getTheProducts({ category: "beds", page, limit }));
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryRight>
        <CategoryLeft Margin>
          <HoverWrapper>
            <Img src={c8} alt="Category-8" />
            {
              <HoverButton>
                <img
                  src={i6}
                  alt="puppyPens"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "puppyPens" });
                    dispatch(
                      getTheProducts({ category: "puppyPens", page, limit })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryLeft>
      </CombineCategories>
      <CombineCategories>
        <CategoryRight>
          <HoverWrapper>
            <Img src={c9} alt="Category-9" />
            {
              <HoverButton>
                <img
                  src={i7}
                  alt="houses"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "houses" });
                    dispatch(
                      getTheProducts({ category: "houses", page, limit })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryRight>
        <CategoryLeft Padding>
          <HoverWrapper>
            <Img src={c10} alt="Category-10" />
            {
              <HoverButton>
                <img
                  alt="snacks"
                  src={i8}
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "snacks" });
                    dispatch(
                      getTheProducts({
                        category: "snacks",
                        page,
                        limit,
                      })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryLeft>
      </CombineCategories>
      <CategoryRight>
        <HoverWrapper>
          <Img src={c11} alt="Category-11" />
          {
            <HoverButton>
              <img
                alt="toys"
                src={i9}
                onClick={() => {
                  dispatch(reset());
                  setSearchParams({ category: "toys" });
                  dispatch(getTheProducts({ category: "toys", page, limit }));
                }}
              />
            </HoverButton>
          }
        </HoverWrapper>
      </CategoryRight>
      <CombineCategories>
        <CategoryRight>
          <HoverWrapper>
            <Img src={c12} alt="Category-12" />
            {
              <HoverButton left>
                <img
                  src={i10}
                  alt="groomingTables"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "groomingTables" });
                    dispatch(
                      getTheProducts({
                        category: "groomingTables",
                        page,
                        limit,
                      })
                    );
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryRight>
        <CategoryLeft MarginB>
          <HoverWrapper>
            <Img src={c13} alt="Category-13" />
            {
              <HoverButton>
                <img
                  src={i11}
                  alt="vehicleRamps"
                  onClick={() => {
                    dispatch(reset());
                    setSearchParams({ category: "vehicleRamps" });
                    dispatch(getTheProducts({ category: "vehicleRamps" }));
                  }}
                />
              </HoverButton>
            }
          </HoverWrapper>
        </CategoryLeft>
      </CombineCategories>
      <CategoryRight>
        <HoverWrapper>
          <Img src={c14} alt="Category-14" />
          {
            <HoverButton>
              <img
                src={i12}
                alt="runningMachines"
                onClick={() => {
                  dispatch(reset());
                  setSearchParams({ category: "runningMachines" });
                  dispatch(getTheProducts({ category: "runningMachines" }));
                }}
              />
            </HoverButton>
          }
        </HoverWrapper>
      </CategoryRight>
      <CombineCategories>
        <CategoryRightCombine>
          <CategoryRight>
            {" "}
            <HoverWrapper>
              <Img src={c15} alt="Category-15" />
              {
                <HoverButton left>
                  <img
                    src={i13}
                    alt="strollers"
                    onClick={() => {
                      dispatch(reset());
                      setSearchParams({ category: "strollers" });
                      dispatch(getTheProducts({ category: "strollers" }));
                    }}
                  />
                </HoverButton>
              }
            </HoverWrapper>
          </CategoryRight>
          <CategoryRight>
            {" "}
            <HoverWrapper>
              <Img src={c18} alt="Category-18" />
              {
                <HoverButton left>
                  <img
                    src={i15}
                    alt="dogShowTrolley"
                    onClick={() => {
                      dispatch(reset());
                      setSearchParams({ category: "dogShowTrolley" });

                      dispatch(getTheProducts({ category: "dogShowTrolley" }));
                    }}
                  />
                </HoverButton>
              }
            </HoverWrapper>
          </CategoryRight>
        </CategoryRightCombine>
        <CategoryLeftCombine>
          <CategoryCenter>
            <HoverWrapper>
              <Img src={c16} alt="Category-16" />
              {
                <HoverButton>
                  <img
                    src={i14}
                    alt="feedingBowls"
                    onClick={() => {
                      dispatch(reset());
                      setSearchParams({ category: "feedingBowls" });
                      dispatch(getTheProducts({ category: "feedingBowls" }));
                    }}
                  />
                </HoverButton>
              }
            </HoverWrapper>
          </CategoryCenter>
          <CategoryLeft>
            <HoverWrapper>
              <Img src={c17} alt="Category-17" />
              {
                <HoverButton>
                  <img
                    src={i16}
                    alt="baths"
                    onClick={() => {
                      dispatch(reset());
                      setSearchParams({ category: "baths" });
                      dispatch(getTheProducts({ category: "baths" }));
                    }}
                  />
                </HoverButton>
              }
            </HoverWrapper>
          </CategoryLeft>
        </CategoryLeftCombine>
      </CombineCategories>
      <CombineCategories>
        <CategoryRight>
          <HoverWrapper>
            <Img
              src={c19}
              alt="Category-19"
              onClick={() => {
                dispatch(reset());
                setSearchParams({ category: "whelpingBoxes" });
                dispatch(getTheProducts({ category: "whelpingBoxes" }));
              }}
            />
          </HoverWrapper>
        </CategoryRight>
        {
          <CombinedHoverButton>
            <img
              src={i17}
              alt="dogShowTent"
              onClick={() => {
                dispatch(reset());
                setSearchParams({ category: "dogShowTent" });
                dispatch(getTheProducts({ category: "dogShowTent" }));
              }}
            />
          </CombinedHoverButton>
        }
        <CategoryLeft>
          <HoverWrapper>
            <Img
              src={c20}
              alt="Category-20"
              onClick={() => {
                dispatch(reset());
                setSearchParams({ category: "agility" });
                dispatch(getTheProducts({ category: "agility" }));
              }}
            />
          </HoverWrapper>
        </CategoryLeft>
      </CombineCategories>
      <CategoryCenter>
        <HoverWrapper>
          <Img src={c21} alt="Category-21" />
          {
            <HoverButton>
              <img
                src={i18}
                alt="whelpingBoxes"
                onClick={() => {
                  dispatch(reset());
                  setSearchParams({ category: "whelpingBoxes" });
                  dispatch(getTheProducts({ category: "whelpingBoxes" }));
                }}
              />
              <img
                src={i19}
                alt="whelpingBoxes"
                onClick={() => {
                  dispatch(reset());
                  setSearchParams({ category: "whelpingBoxes" });
                  dispatch(getTheProducts({ category: "whelpingBoxes" }));
                }}
              />
            </HoverButton>
          }
        </HoverWrapper>
      </CategoryCenter>
      <HoverWrapper>
        <Img src={c22} alt="Category-22" />
        {
          <HoverButton>
            <img
              src={i20}
              alt="agility"
              onClick={() => {
                dispatch(reset());
                setSearchParams({ category: "agility" });
                dispatch(getTheProducts({ category: "agility" }));
              }}
            />
          </HoverButton>
        }
      </HoverWrapper>
    </CategoriesContainer>
  );
};

const HoverButton = styled.button`
  background-color: #0791ff;
  border: 1px solid #e7eaf3;
  border-radius: 8px;
  position: absolute;
  cursor: pointer;
  display: none;
  z-index: 10;
  left: ${(props) => (props.left ? "0" : "")};
  width: 180px;
  height: 60px;
  img {
    width: 150px;
    height: 50px;
  }
`;

const CombinedHoverButton = styled.button`
  background-color: #0791ff;
  border: 1px solid #e7eaf3;
  border-radius: 8px;
  position: absolute;
  cursor: pointer;
  display: none;
  z-index: 10;
  width: 180px;
  height: 60px;
  img {
    width: 150px;
    height: 50px;
  }
`;

const HoverWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${HoverButton} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      height: 60px;
      img {
        width: 150px;
        height: 50px;
      }
    }
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  grid-gap: 3px;
`;
const CombineCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ Margin }) => (Margin ? "-70px" : "0")};
  &:hover {
    ${CombinedHoverButton} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const CategoryRight = styled.div`
  align-self: flex-start;
  padding-top: ${({ Padding }) => (Padding ? "50px" : "0")};
`;
const CategoryLeft = styled.div`
  align-self: flex-end;
  padding-top: ${({ Padding }) => (Padding ? "50px" : "0")};
  margin-top: ${({ Margin }) => (Margin ? "130px" : "0")};
  margin-bottom: ${({ MarginB }) => (MarginB ? "30px" : "0")};
  @media screen and (max-width: 850px) {
    margin-top: ${({ Margin }) => (Margin ? "100px" : "0")};
  }
  @media screen and (max-width: 760px) {
    margin-top: ${({ Margin }) => (Margin ? "70px" : "0")};
  }
  @media screen and (max-width: 500px) {
    margin-top: ${({ Margin }) => (Margin ? "50px" : "0")};
  }
`;
const CategoryCenter = styled.div`
  align-self: center;
`;
const CategoryLeftCombine = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding-bottom: 40px;
`;
const CategoryRightCombine = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  grid-gap: 40px;
  padding-top: 30px;
`;
export default Categories;
