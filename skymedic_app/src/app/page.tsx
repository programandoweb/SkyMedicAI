import ComponentCSR from "./ComponentCSR";
import { Colombia } from "@/ts/post";


async function getData(): Promise<Colombia[]> {
  const res = await fetch('https://www.datos.gov.co/resource/xrdq-pb8b.json', { cache: 'no-store' });
  /**
   * ver respuesta
   */
  console.log(res)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const dataSet = await getData();

  /**
     * ver respuesta
     */
  console.log(dataSet)

  return <ComponentCSR dataSet={dataSet}/>
}
