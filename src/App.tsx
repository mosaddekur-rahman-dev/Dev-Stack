import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Stack from "./components/Stack";
import type { IStack } from "./types";

const stacksFetch = async (): Promise<IStack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const stacksPromise = stacksFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Stack stacksPromise={stacksPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
