import FetchProduct from "./NextComponent/apiFetch";
import Screen from "./NextComponent/screen";
export default function Home() {
  return(
    <>
    {/*Screen Section */}
    <Screen/>
    {/*Fetch Product Section */}
    <FetchProduct/>
    </>
  )
}