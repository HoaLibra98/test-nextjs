import { Container } from "@mui/material";
import YouMayAlsoLike from "@/components/homePage/youMayAlsoLike";
import Explore from "@/components/homePage/explore";
import Footer from "@/components/layout/footer";
import Contact from "@/components/homePage/contact";

export default function Home() {
  return (
    <main>
      <YouMayAlsoLike />
      <Container id="explore">
        <Explore />
      </Container>
      <Contact />
    </main>
  );
}
