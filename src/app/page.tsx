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
        mediaType='image'
        mediaSrc='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop'
        bgImageSrc='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop'
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
