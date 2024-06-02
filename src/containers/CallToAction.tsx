import { ColorButton } from "@/components";
import { CTA } from "@/constant/data";

const CallToAction = () => {
  return (
    <section className="section">
      <div className="bg-[url('/assets/images/ctabackground.png')] bg-no-repeat bg-center bg-cover text-center h-fit rounded-3xl px-2 py-12 flex flex-col items-center bg-[#121212] dark:bg-[#363D41]">
        <h3 className="mb-14 max-w-[800px] text-2xl font-medium text-white capitalize">
          {CTA.text}
        </h3>

        <ColorButton label="Let's talk" to="" leftIcon="👋" />
      </div>
    </section>
  );
};

export default CallToAction;
