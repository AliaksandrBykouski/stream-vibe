import MoviesBanner from "@/sections/MoviesBanner";
import Collections from "@/sections/Collections";

export const metadata = {
    title: "Movies and Shows",
}

export default function () {
  return (
    <>
      <MoviesBanner />
      <Collections />
    </>
  )
}
