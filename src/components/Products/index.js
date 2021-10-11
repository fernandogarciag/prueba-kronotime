import Container from "./Container";

const Products = () => {
  const data = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    products: [
      {
        name: "Reloj Invicta Pro Diver 21841",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678268146_1024x1024@2x.jpg?v=1633649679",
        price: "629.900",
        discount: "68",
        discountPrice: "199.900",
      },
      {
        name: "Reloj Invicta pro diver 21839",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678268122_1024x1024@2x.jpg?v=1633132982",
        price: "629.900",
        discount: "68",
        discountPrice: "199.900",
      },
      {
        name: "Reloj Invicta angel 31072",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678367689_1024x1024@2x.jpg?v=1630677726",
        price: "799.900",
        discount: "63",
        discountPrice: "299.900",
      },
      {
        name: "Reloj Invicta pro diver 28002",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678334735_da551ca9-dc2f-47c9-9d5b-d0903b6447b0_1024x1024@2x.jpg?v=1625088074",
        price: "949.900",
        discount: "68",
        discountPrice: "299.900",
      },
      {
        name: "Reloj Invicta pro diver 26974",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678324255_1024x1024@2x.jpg?v=1631053337",
        price: "749.900",
        discount: "67",
        discountPrice: "249.900",
      },
      {
        name: "Reloj Invicta Speedway 32256",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678380084_1024x1024@2x.jpg?v=1630622887",
        price: "1.349.900",
        discount: "63",
        discountPrice: "499.900",
      },
      {
        name: "Reloj Invicta Pro Diver 36851",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678451500_1024x1024@2x.jpg?v=1631736943",
        price: "799.900",
        discount: "63",
        discountPrice: "299.900",
      },
      {
        name: "Reloj Invicta angel 30685",
        image:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678363803_6fe0d82e-11e2-4a5f-93fb-f6a469c77e18_1024x1024@2x.jpg?v=1630681467",
        price: "1.139.900",
        discount: "65",
        discountPrice: "399.900",
      },
    ],
  };
  return <Container data={data} />;
};

export default Products;
