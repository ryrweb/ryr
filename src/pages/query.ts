export const PAGE_QUERY = `query {
  page(id: 2) {
    data {
      id
      attributes {
        name
        favicon {
          data {
            attributes {
              url
            }
          }
        }
        csses {
          data {
            id

            attributes {
              css {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        sections {
          __typename
          ... on ComponentSectionNavbar {
            links {
              url
              title
            }
            logo {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentSectionCards {
						title
						items {
							title
							image{
								data{ 
								attributes{
									url
								}
									
								}
							}
						}
					}
          ... on ComponentSectionSlide {
            id
            items {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentSectionAbout {
            id
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentSectionAreas {
            title
            items(pagination:{limit:20}) {
              title
            }
          }
          ... on ComponentSectionServices {
            title
            items {
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentSectionPartners {
            title
            items {
              title
              caption
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentSectionContact {
            id
            title
            description
            email
            url
            phone
            postal
            address
          }
        }
      }
    }
  }
}
`;

export const NAVBAR_QUERY = `
  query {
    page(id: 2) {
      data {
        attributes {
          sections {
            ... on ComponentSectionNavbar {
              links {
                url
                title
              }
              logo {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
