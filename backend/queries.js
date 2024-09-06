const serverData = {
  message: "success",
  data: { id: 1, content: "hello world", numOfComments: 3 },
};

const getAllInfo = async (req, res) => {
  try {
    res.json(serverData);
    console.log(serverData);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getAllInfo,
};
