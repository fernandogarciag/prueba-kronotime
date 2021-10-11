const Dropdown = ({ content }) => (
  <>
    <li className="nav-item dropdown position-static">
      <a
        className="nav-link dropdown-toggle text-uppercase"
        href="/"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {content.title}
      </a>
      <div
        className="dropdown-menu mt-0 w-100 shadow border-outline-success border-0 rounded-0 navbar-dark bg-dark"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <div className="container-lg mx-auto">
          <div className="row">
            {content.categories.map((category, key) => (
              <div className="col-6 col-md" key={key}>
                <span className="text-light text-uppercase">
                  {category.title}
                </span>
                <hr className="dropdown-divider bg-white" />
                <div className="navbar-nav row">
                  {category.brands.map((brand, key) => (
                    <div
                      className={`nav-item col-${category.column}`}
                      key={key}
                    >
                      <a className="nav-link d-inline" href={brand.link}>
                        {brand.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  </>
);

export default Dropdown;
