import Container from "./Container";

const Hero = () => {
  const data = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
    },
    images: [
      {
        desktop:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/files/cyber-199_banner-principal-1920_copia.jpg?v=1633131261",
        mobile:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/files/cyber-199_banner-mobile.jpg?v=1633131261",
      },
      {
        desktop:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/files/70off_banner-principal-1920_copia.jpg?v=1633131325",
        mobile:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/files/70off_banner-mobile.jpg?v=1633131325",
      },
      {
        desktop:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/files/IM-BPRINC-DESK-INVICTA-TIENDA-OFICIAL-COL_Mesa_de_trabajo_1.jpg?v=1629399000",
        mobile:
          "https://cdn.shopify.com/s/files/1/0275/8420/0792/files/IM-BPRINC-DESK-INVICTA-TIENDA-OFICIAL-COL-03.jpg?v=1629399000",
      },
    ],
  };
  return <Container data={data} />;
};

export default Hero;
