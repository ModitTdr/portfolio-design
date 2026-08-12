import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Homepage from "@/pages/Homepage";

export default function Home() {
  return (
    <LenisScroll>
      <Navbar />
      <Homepage />
    </LenisScroll>
  );
}
