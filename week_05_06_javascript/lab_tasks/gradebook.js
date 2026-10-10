const students = [
  { name: "Ayesha Khan", score: 88 },
  { name: "Bilal Ahmed", score: 45 },
  { name: "Fatima Noor", score: 92 },
  { name: "Hamza Ali", score: 67 },
  { name: "Zainab Malik", score: 54 }
];

const analyzeGradebook = (studentList, passThreshold = 50) => {
  
  const total_score = studentList.reduce((sum, student) => sum + student.score, 0);
  const class_average = (total_score / studentList.length).toFixed(2);


  const highest = studentList.reduce((max, student) => student.score > max.score ? student : max, studentList[0]);

  
  const lowest = studentList.reduce((min, student) => student.score < min.score ? student : min, studentList[0]);

  const passed_count = studentList.filter(student => student.score >= passThreshold).length;
  const pass_rate = ((passed_count / studentList.length) * 100).toFixed(2);

  const sortedNames = [...studentList]
    .sort((a, b) => b.score - a.score)
    .map(student => `${student.name} (${student.score})`);

  return {
    classAverage: class_average,
    highestScorer: `${highest.name} (${highest.score})`,
    lowestScorer: `${lowest.name} (${lowest.score})`,
    passRate: `${pass_rate}%`,
    sortedNames
  };
};

console.log(analyzeGradebook(students));