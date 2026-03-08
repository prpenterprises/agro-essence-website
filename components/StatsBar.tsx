export default function StatsBar() {
  return (
    <section className="bg-green-700 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 text-center gap-8">
        <div>
          <h4 className="text-3xl font-bold">5000+</h4>
          <p>Farmers Served</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold">50+</h4>
          <p>Locations</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold">12+</h4>
          <p>States Covered</p>
        </div>
      </div>
    </section>
  );
}
