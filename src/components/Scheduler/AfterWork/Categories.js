export default function Categories({ sampleCategories, setCategory, handleUpdateStage }) {
  return (
    <>
      <h2 className="mx-10 text-3xl font-semibold">What do you want to do then?</h2>
      {sampleCategories?.map((category, idx) => (
        <button
          key={idx}
          className="bg-white shadow sm:rounded-lg p-2 m-2 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          style={{ width: "30%" }}
          onClick={() => {
            setCategory(category);
            handleUpdateStage();
          }}
        >
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{category}</h3>
          </div>
        </button>
      ))}
    </>
  );
}
