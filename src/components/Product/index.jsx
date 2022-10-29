import {
  Container,
  DetailBox,
  DetailCategory,
  DetailName,
  DetailPrice,
  DetailPriceBox,
  DetailPriceDiscount,
  DiscountContent,
  DiscountFlag,
  Image,
  ImageBox,
  ProductContainer,
} from "./styles";

const Product = ({ data }) => {
  return (
    <Container>
      {data.slice(0, 8).map((product) => {
        return (
          <ProductContainer key={product.id} className="product-container">
            <ImageBox className="product-image">
              {product.discountFlag ? (
                <DiscountFlag className="product-promotion">
                  <DiscountContent>
                    {product.discountFlag * 100}% OFF
                  </DiscountContent>
                </DiscountFlag>
              ) : null}
              <Image src={product.imageUrl} alt={product.name} />
            </ImageBox>
            <DetailBox className="product-detail">
              <DetailCategory className="product-category">
                {product.category}
              </DetailCategory>
              <DetailName className="product-title">{product.name}</DetailName>
              <DetailPriceBox className="product-price">
                {product.oldPrice ? (
                  <DetailPriceDiscount className="product-value">
                    ${product.price}
                  </DetailPriceDiscount>
                ) : (
                  <DetailPrice className="product-value">
                    ${product.price}
                  </DetailPrice>
                )}
                {product.oldPrice ? (
                  <DetailPrice className="product-value">
                    ${product.oldPrice}
                  </DetailPrice>
                ) : null}
              </DetailPriceBox>
            </DetailBox>
          </ProductContainer>
        );
      })}
    </Container>
  );
};

export default Product;
