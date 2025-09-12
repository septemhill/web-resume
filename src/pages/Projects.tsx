const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">專案</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">[專案名稱]</h3>
          <p className="text-sm text-gray-600">
            <strong>使用技術：</strong> [技術1, 技術2, 技術3]
          </p>
          <p className="mt-2">[專案的簡短描述，說明這個專案的目標以及您扮演的角色。]</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>[您在這個專案中的貢獻或完成的功能 1]</li>
            <li>[您在這個專案中的貢獻或完成的功能 2]</li>
          </ul>
          <div className="mt-2 space-x-4">
            <a href="[專案連結]" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">專案連結</a>
            <a href="[GitHub Repo 連結]" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a>
          </div>
        </div>
        {/* 您可以複製上面這個 div 來新增更多專案 */}
      </div>
    </section>
  );
};

export default Projects;