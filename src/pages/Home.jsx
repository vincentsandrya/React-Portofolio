import Header from "../components/elements/header";
import Experience from "../components/fragments/experience";
import Skills from "../components/fragments/skills";
import Project from "../components/fragments/project";
import SocialMedia from "../components/fragments/socialmedia";
import GithubContributions from "../components/fragments/GithubContributions";

function index() {
  return (
    <>
      <Header />
      {/* <!-- Main Content --> */}
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-20 py-16 space-y-20">
        <Experience />
        <Skills />
        <Project />
        <GithubContributions />
        <SocialMedia />
      </main>
      {/* FOOTER */}
      <footer className="bg-indigo-600 text-indigo-100 text-center py-6 mt-auto">
        <p className="text-sm">© 2024 Vincent Sandrya. All rights reserved.</p>
      </footer>
    </>
  );
}

export default index;
