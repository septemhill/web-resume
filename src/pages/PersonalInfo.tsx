const PersonalInfo = () => {
  return (
    <section id="personal-info" className="text-center">
      <h1 className="text-4xl font-bold mb-2">[你的名字]</h1>
      <p className="text-lg text-gray-600 mb-4">[你的職稱，例如：前端工程師]</p>
      <div className="flex justify-center gap-4 mb-4">
        <a href="mailto:[你的Email]" className="text-blue-500 hover:underline">Email</a>
        <span>&middot;</span>
        <a href="[你的LinkedIn]" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
        <span>&middot;</span>
        <a href="[你的GitHub]" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
        <span>&middot;</span>
        <a href="[你的個人網站]" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">個人網站</a>
      </div>
      <p className="max-w-2xl mx-auto">
        [一段關於你自己的簡短介紹，例如你的專業領域、熱情所在、職涯目標等。]
      </p>
    </section>
  );
};

export default PersonalInfo;