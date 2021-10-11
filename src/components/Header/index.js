import Container from "./Container";

const Header = () => {
  const data = {
    title: "Kronotime",
    first: {
      title: "Colecciones",
      categories: [
        {
          title: "Invicta",
          column: "auto",
          brands: [
            {
              name: "Todos los productos",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
            {
              name: "Marca 1",
              link: "/",
            },
          ],
        },
        {
          title: "Colaboraciones",
          column: "auto",
          brands: [
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
          ],
        },
        {
          title: "Accesorios",
          column: "auto",
          brands: [
            {
              name: "Todos los Accesorios",
              link: "/",
            },
          ],
        },
        {
          title: "Technomarine",
          column: "auto",
          brands: [
            {
              name: "Todos los Productos",
              link: "/",
            },
            {
              name: "Hombre",
              link: "/",
            },
            {
              name: "Mujer",
              link: "/",
            },
          ],
        },
      ],
    },
    second: {
      title: "Swiss Made",
    },
    third: {
      title: "Hombre",
      categories: [
        {
          title: "Para Ellos",
          column: "3",
          brands: [
            {
              name: "Todos los productos",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
            {
              name: "Marca 2",
              link: "/",
            },
          ],
        },
      ],
    },
    fourth: {
      title: "Mujer",
      categories: [
        {
          title: "Para Ellas",
          column: "3",
          brands: [
            {
              name: "Todos los productos",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
            {
              name: "Marca 3",
              link: "/",
            },
          ],
        },
      ],
    },
    fifth: {
      title: "Gafas",
    },
    sixth: {
      title: "Cyber Days",
    },
  };
  return <Container data={data} />;
};

export default Header;
