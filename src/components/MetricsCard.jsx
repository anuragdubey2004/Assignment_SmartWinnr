function MetricsCard({ title, value, icon: Icon, color, trend }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <Icon className={`w-12 h-12 ${color}`} />
      </div>
      <p className="text-green-500 text-sm mt-2">{trend}</p>
    </div>
  );
}

export default MetricsCard;