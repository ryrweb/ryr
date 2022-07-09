export async function getData() {
  const response = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "force-cache",
    body: JSON.stringify({
      query: `query {
	page(id: 2) {
		data {
			id
			attributes {
				name
				favicon{
					data{
						attributes{
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
					... on ComponentSectionSlide {
						id
						items{
							image{
								data{
									attributes{
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
						items {
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
					}
				}
			}
		}
	}
}`,
    }),
  });

  console.log(response);

  const { data } = await response.json();
  const { sections, name, favicon } = data?.page.data.attributes;
  const { url: faviconUrl } = favicon.data.attributes;
  return { sections, name, faviconUrl };
}
