import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#efefef]">
      <div className="container mx-auto px-4 max-w-[830px] text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-6 leading-tight">
          YOUR JOURNEY IS OUR PRIORITY
        </h2>
        <p className="text-sm md:text-base text-[#787676] mb-8 leading-relaxed">
          Nullam auctor, sapien sit amet lacinia euismod, lorem magna lobortis massa, in tincidunt mi metus quis lectus. Duis nec lobortis velit. Vivamus id magna vulputate, tempor ante eget, tempus augue. Maecenas ultricies neque magna.
        </p>
        <Button className="h-11 px-6 text-sm font-medium bg-[#69c6ba] hover:bg-[#c66995] text-white transition-colors">
          CONTINUE EXPLORE
        </Button>
      </div>
    </section>
  );
}