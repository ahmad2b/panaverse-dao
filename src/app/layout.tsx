import ChakraWrapper from "./components/ChakraWrapper";
import TopBar from "./(navigation)/TopBar";
import RightNav from "./(navigation)/RightBar";
import FooterBar from "./(navigation)/FooterBar";
import Logo from "./(navigation)/Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>
          <TopBar />
          <Logo />
          <RightNav />
          {children}
          <FooterBar />
        </ChakraWrapper>
      </body>
    </html>
  );
}
