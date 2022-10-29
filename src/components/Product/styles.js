import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 10px;
  place-items: center;
  @media (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ProductContainer = styled.section`
  font-family: "Inter", sans-serif;
  width: 163px;
  border-radius: 2.23288px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

export const DiscountFlag = styled.div`
  position: absolute;
  top: 14.09px;
  left: 13px;
  width: 88px;
  height: 32px;
  border-radius: 29px;
  background-color: #e7ff86;
  display: grid;
  place-items: center;
`;

export const DiscountContent = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 12px;
  line-height: 24px;
  color: #474747;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 163px;
  padding: 8.79px 0;
  box-shadow: 3.34932px 8.93151px 16.7466px rgba(105, 98, 98, 0.05);
  background: #fff;
`;

export const Image = styled.img`
  width: 147px;
  background-size: contain;
  height: 161.6px;
`;

export const DetailBox = styled.div`
  margin: 10px 0 4px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const DetailName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #474747;
`;

export const DetailCategory = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: #8f8f8f;
`;

export const DetailPriceBox = styled.div`
  display: flex;
  gap: 11px;
  margin: 2px 0;
`;

export const DetailPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: #1f1f1f;
`;

export const DetailPriceDiscount = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-decoration-line: line-through;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: #8f8f8f;
`;
