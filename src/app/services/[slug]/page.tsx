import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import { services, getServiceBySlug } from "@/lib/services";
import { serviceIcons, serviceImages } from "@/lib/serviceVisuals";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — S R S P & Co`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const index = services.indexOf(service);
  const Icon = serviceIcons[index];
  const image = serviceImages[index % serviceImages.length];
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section className="relative flex h-72 md:h-96 flex-col items-center justify-center overflow-hidden bg-heading">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image.replace("w=800&q=70", "w=1920&q=80")}')` }}
          />
          <div className="absolute inset-0 bg-heading/80" />
          <div className="relative z-10 px-4 text-center">
            <h1
              className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {service.title}
            </h1>
            <nav
              className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-white/60"
              style={{ fontFamily: "var(--font-dm)" }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="transition-colors duration-200 hover:text-primary-light">
                Home
              </Link>
              <ChevronRight size={14} className="opacity-60" />
              <Link
                href="/services"
                className="transition-colors duration-200 hover:text-primary-light"
              >
                Services
              </Link>
              <ChevronRight size={14} className="opacity-60" />
              <span className="text-white">{service.title}</span>
            </nav>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#FAFAF8] py-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <SectionLabel text="Service Overview" />
              <div className="mt-6 mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0F4A3C] shadow">
                <Icon size={26} className="text-white" />
              </div>
              <h2
                className="mb-4 text-2xl sm:text-3xl font-extrabold leading-tight text-heading"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {service.title}
              </h2>
              <p
                className="mb-4 leading-relaxed text-body"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                {service.description}
              </p>
              <p
                className="mb-10 leading-relaxed text-body"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                {service.overview}
              </p>

              <h3
                className="mb-4 text-xl font-bold text-heading"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                What we offer
              </h3>
              <ul className="mb-10 space-y-3">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary-light/30 px-4 py-1.5 text-xs font-semibold text-primary"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors duration-300 hover:bg-[#174f41]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
            </div>

            {/* Sidebar */}
            <aside className="h-fit rounded-2xl bg-[#F1F4F1] p-6">
              <h3
                className="mb-4 text-lg font-bold text-heading"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Other Services
              </h3>
              <ul className="space-y-1">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-body transition-colors duration-200 hover:bg-white hover:text-primary"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {s.title}
                      <ChevronRight size={14} className="shrink-0 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
