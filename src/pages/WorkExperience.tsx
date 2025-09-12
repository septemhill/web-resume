const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">工作經歷</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">[公司名稱] - [你的職位]</h3>
          <p className="text-sm text-gray-600">[開始日期] - [結束日期]</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>[你在這個職位上的主要職責或成就 1]</li>
            <li>[你在這個職位上的主要職責或成就 2]</li>
            <li>[你在這個職位上的主要職責或成就 3]</li>
          </ul>
        </div>
        {/* 您可以複製上面這個 div 來新增更多工作經歷 */}
      </div>
    </section>
  );
};

export default WorkExperience;