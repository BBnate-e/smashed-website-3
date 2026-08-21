import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Navbar } from '@/components/site/navbar';
import { HeroAbout } from '@/components/site/hero-about';
import { Philosophy } from '@/components/site/philosophy';
import { Menu } from '@/components/site/menu';
import { Gallery } from '@/components/site/gallery';
import { Location } from '@/components/site/location';
import { Footer } from '@/components/site/footer';

export default function Home() {
  return (
    <div id='top'>
      <Navbar />

      <ScrollExpandMedia
        mediaType='video'
        mediaSrc='/hero/smash-action.mp4'
        posterSrc='/hero/burger-spread.webp'
        bgImageSrc='/hero/burger-spread.webp'
        title='Smashed Fribourg'
        date="Smash burgers d'exception"
        scrollToExpand='Faites défiler pour découvrir'
        textBlend={false}
      >
        <HeroAbout />
      </ScrollExpandMedia>

      <Philosophy />
      <Menu />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}
