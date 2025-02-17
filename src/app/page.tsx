import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import { ArrowDownRight, ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

// Constants
const BLOG_DIRECTORY = path.join(process.cwd(), "content"); // Path to blog content
const BIRTH_YEAR = 1998; // Birth year for age calculation
const LIMIT = 2; // Max number of posts/projects to display

export default async function Home() {
  // Fetch latest posts
  const posts = await getPosts(BLOG_DIRECTORY, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        {/* Profile Image */}
        <div className="flex justify-center mt-8 md:mt-0 md:justify-start">
        <Image
          className="rounded-lg"
          src="/nilanjana.jpg" // Update with your image path
          alt="Photo of Nilanjana Debnath"
          width={200}
          height={200}
          priority
        />
        </div>

        {/* Introduction Text */}
        <div className="flex flex-col">
          <h1 className="title text-5xl">Hi, I'm Nilanjana 👋</h1>
          <p className="mt-4 font-light">
            {new Date().getFullYear() - BIRTH_YEAR}-year-old researcher and
            developer specializing in <strong>Machine Learning</strong>,{" "}
            <strong>Graph Neural Networks</strong>, and{" "}
            <strong>Natural Language Processing</strong>.
          </p>
          <p className="mt-2 font-light">
            Currently pursuing my <strong>M.S. (Research)</strong> at{" "}
            <strong>IIT Palakkad</strong>, I’m passionate about solving complex
            problems using cutting-edge technologies. When I’m not coding, I
            enjoy exploring new datasets and sipping on a cup of chai. 🍵
          </p>

          {/* Chatbot Prompt */}
          <div className="mt-4 flex items-end gap-1">
            <p className="font-semibold">Ask the chatbot anything about me</p>
            <ArrowDownRight className="size-5 animate-bounce" />
          </div>

          {/* Call-to-Action Buttons */}
          <section className="mt-8 flex items-center gap-8">
            <Link href="/Nilanjana_Debnath_Resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Featured Projects</h2>
          {/* <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="View More"
          /> */}
        </div>
        <Projects limit={LIMIT} />
      </section>

      {/* Recent Posts Section 
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">Recent Posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="View More"
          />
        </div>
        <Posts posts={posts} />
      </section>*/}
    </article>
  );
}