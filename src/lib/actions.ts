// export const baseUrl = "http://localhost:1337/";
export const baseUrl = "https://strapitestetm2a.onrender.com/";

export async function getStrapiDataHome(path: string) {
  try {
    const response = await fetch(baseUrl + path + "?populate=*");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
  }
}



export async function getStrapiDataAbout(path: string) {
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
  }
}