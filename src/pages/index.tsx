import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <main className="container mx-auto max-w-4xl p-4 sm:p-8">
        <div className="space-y-10 rounded-lg bg-white p-6 shadow-md sm:p-10">
          <PersonalInfo />
          <WorkExperience />
          <Projects />
          <Education />
        </div>
      </main>
    </div>
  );
}
