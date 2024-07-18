import Image from "next/image";
import Hero from "./home/hero";
import JoinUs from "./home/join-us";
import AboutUs from "./home/about-us";
import Features from "./home/features";
import Courses from "./home/courses";
import Blog from "./home/blog";
import QNA from "./home/qna";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-0 bg-white"
    >
      <Hero></Hero>
      <JoinUs></JoinUs>
      <AboutUs></AboutUs>
      <Features></Features>
      <Courses></Courses>
      <Blog></Blog>
      <QNA></QNA>
    </main>
  );
}
