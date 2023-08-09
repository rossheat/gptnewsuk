"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  ClockIcon,
  MagnifyingGlassCircleIcon,
  XMarkIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Overview", href: "#overview" },
  { name: "Features", href: "#features" },
  { name: "FAQs", href: "#faqs" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

const faqs = [
  {
    id: 1,
    question: "Is the UK Latest News plugin free?",
    answer:
      "Yes, the UK Latest News plugin is currently free while it is in beta. We're excited to have users try it out and provide feedback.",
  },
  {
    id: 2,
    question: "How do I start using the plugin?",
    answer:
      "To start using the plugin, you just need to install it via the ChatGPT Plugin Store.",
  },
  {
    id: 3,
    question: "What news outlets does the plugin cover?",
    answer:
      "Our plugin covers a wide range of UK's top news outlets including BBC News, Sky News, The Independent, and others.",
  },
  {
    id: 4,
    question: "Do I need a ChatGPT subscription to use the plugin?",
    answer: "Yes, you do need a ChatGPT subscription to use the plugin.",
  },
  {
    id: 5,
    question: "What should I do if I need help or support?",
    answer:
      "Please contact us at help@gptnews.uk. Our team is ready to assist you.",
  },
];

const features = [
  {
    name: "Real-time updates",
    description:
      "Get the latest news as it happens from the UK's top news outlets.",
    icon: ClockIcon,
  },
  {
    name: "Get the details",
    description:
      "Get the full details, a summary, or bullet points of any current story.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Wide coverage",
    description:
      "We source news from BBC News, Sky News, The Independent, and others.",
    icon: NewspaperIcon,
  },
  {
    name: "Easy integration",
    description:
      "Simply install the UK Latest News via the ChatGPT plugin store.",
    icon: PuzzlePieceIcon,
  },
];

const footerNavigation = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Features", href: "#features" },
  { name: "FAQs", href: "#faqs" },
];

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto rounded-md" src="/logo.svg" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto  rounded-md"
                  src="/logo.svg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            {/* <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            /> */}
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  UK's Latest News in ChatGPT
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The "UK Latest News" ChatGPT plugin brings you the most recent
                  news stories from the UK's top news outlets including BBC
                  News, Sky News, The Independent, and others! Stay informed,
                  stay ahead.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://chat.openai.com/?model=gpt-4-plugins"
                    className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#features"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div id="overview" className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="/demo.png"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature section */}
        <div
          id="features"
          className="mx-auto mt-8 max-w-7xl px-6 sm:mt-14 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">
              Stay Informed
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to stay updated with UK's latest news
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our ChatGPT plugin "UK Latest News" is designed to keep you
              informed with the most recent news from the UK's top news outlets.
              Never miss an important update with our easy-to-use and reliable
              plugin.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* FAQs */}
        <div
          id="faqs"
          className="mt-36 mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32"
        >
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay updated with the latest UK news.
              <br />
              Use our ChatGPT plugin today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Get the latest news stories from the UK's top news outlets
              including BBC News, Sky News, The Independent, and others, right
              in ChatGPT!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://chat.openai.com/?model=gpt-4-plugins"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Get started
              </a>
              <a
                href="#features"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="flex flex-wrap justify-center space-x-8 xl:items-center xl:justify-between mb-8 xl:mb-16">
            <img
              className="h-7 mb-6 xl:mb-0  rounded-md"
              src="/logo.svg"
              alt="Company name"
            />
            {footerNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-8 md:lg-12 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} UK Latest News
          </div>
        </footer>
      </div>
    </div>
  );
}
