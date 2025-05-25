const Index = () => {
  return (
    <section className="px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-pink-600 inline-block pb-2">
          Github Contributions
        </h2>

        {/* Contribution Graph */}
        <div className="border rounded-lg p-4">
          <img
            src="https://ghchart.rshah.org/vincentsandrya"
            alt="GitHub Contributions"
            className="w-full"
          />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-4">
          <img
            src="https://github-readme-stats.vercel.app/api?username=vincentsandrya&show_icons=true&theme=default"
            alt="GitHub Stats"
            className="w-full"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vincentsandrya&layout=compact&theme=default"
            alt="Top Languages"
            className="w-full"
          />
        </div>

        <a
          href="https://github.com/vincentsandrya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          View Full GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Index;
