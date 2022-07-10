export function GetImageUrl(image) {
  const { url } = image.data?.attributes ?? "";
  return `http://localhost:1337${url}`;
}
