import { NAVBAR_QUERY, PAGE_QUERY } from "./query";

export async function getData() {
  const response = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "force-cache",
    body: JSON.stringify({
      query: PAGE_QUERY,
    }),
  });

  const { data } = await response.json();
  const { sections, name, favicon } = data?.page.data.attributes;
  const { url: faviconUrl } = favicon.data.attributes;
  return { sections, name, faviconUrl };
}

export async function getNavBar() {
  const response = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "force-cache",
    body: JSON.stringify({
      query: NAVBAR_QUERY,
    }),
  });

  const { data } = await response.json();
  const { sections } = data?.page.data.attributes;
  return { sections };
}
