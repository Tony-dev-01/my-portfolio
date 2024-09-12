const { response } = require("express");

const IntroductionData = {
  status: 200,
  message: "success",
  data: { id: 1, content: "This is my introduction text. Learn more about me.", img: "https://i.pinimg.com/236x/bf/57/02/bf57026ee75af2f414000cec322f7404.jpg" },
};

const AboutData = {
  status: 200,
  message: "success",
  data: { id: 1, 
    content: {
      description: "This is my about text. Learn more about me.",
      location: 'Gatineau-Ottawa',
      hobbies: 'Hockey, Gym and coding.'
    }, 
  },
};


const simulateServerResponseTime = (data) => {
  const responseTime = Math.floor(Math.random() * 2000) + 100;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(responseTime > 2500){
        reject(new Error(`Promise timed out after ${responseTime}ms.`));
      } else {
        resolve(data);
      }
  }, responseTime);
})
};

const getIntroduction = async (req, res) => {
  try {
    const data = await simulateServerResponseTime(IntroductionData);
    res.status(200).json({ status: 200, data: data.data, message: "successful" });
  } catch (err) {
    res.status(404).json({ status: 404, data: {}, message: err.message });
  }
};

const getAbout = async (req, res) => {
  try {
    const data = await simulateServerResponseTime(AboutData);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ status: 404, data: {}, message: err.message });
  }
};

module.exports = {
  getIntroduction,
  getAbout
};
