const {getDashboardSummary,getChartData,getLatestReading } = require('../service/userDashboardService');
const Meter = require('../model/Meter');
const User = require('../model/User');

const init =  async (req, res) => {
  const { id } = req.params;
  const { range = "7" } = req.query;

  try {
    //find the meter id.
    const meter = await Meter.findOne({assingnedUserId:id});

    console.log('meterDAta inside the init---------->',meter);
    const meterId = meter._id;

    if(!meterId || !id || !range ){
        return res.status(404).json({message:"All data is required!"});
    }
    
    //in this we will call the all the api that we need for the Dashboard.
    const [summary] = await Promise.all([
      getDashboardSummary(meterId, id, range),
    ]);

    return res.json({
        summary
    });
  } catch (error) {
    console.error("/api/dashboard/init error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


const chart = async (req, res) => {
  const { meterId, id, range = "7d" } = req.query;

  try {
    const chartData = await getChartData(meterId, id, range);
    return res.json(chartData);
  } catch (error) {
    console.error("/api/dashboard/chart error:", error);
    return res.status(500).json({ message: "Error fetching chart data" });
  }
};


const summary = async (req, res) => {
  const { meterId, id, range = "7d" } = req.query;

  try {
    const summary = await getDashboardSummary(meterId, id, range);
    return res.json(summary);
  } catch (error) {
    console.error("/api/dashboard/summary error:", error);
    return res.status(500).json({ message: "Error fetching summary" });
  }
};
const profile = async(req,res)=>{
  try {
    const user = await User.findById(req.user.id).select('id name email role');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error('Error in /me:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {init,summary,chart,profile}