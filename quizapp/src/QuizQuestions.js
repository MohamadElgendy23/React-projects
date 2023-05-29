//contains the questions for each topic as an array

const QuizQuestions = [
  //CS Questions
  [
    {
      id: 1,
      question: "What data structure doesn't allow duplicates?",
      answerChoices: ["Queue", "Map", "Set", "Array"],
      answer: "Set",
    },
    {
      id: 2,
      question: "What procudure do stacks follow?",
      answerChoices: ["FIFO", "LIFO", "O(N)", "Plates"],
      answer: "LIFO",
    },
    {
      id: 3,
      question: "What procudure do queues follow?",
      answerChoices: ["LIFO", "O(N)", "FIFO", "Push"],
      answer: "FIFO",
    },
    {
      id: 4,
      question:
        "What algorithm allows a splitting of numbers until a specific number is found?",
      answerChoices: [
        "Quick Sort",
        "Selection Sort",
        "Linear Search",
        "Binary Search",
      ],
      answer: "Binary Search",
    },
  ],

  //Math Questions
  [
    {
      id: 1,
      question: "What is the square root of 49?",
      answerChoices: ["6", "8", "7", "9"],
      answer: "7",
    },
    {
      id: 2,
      question: "What is the integeral of x^2?",
      answerChoices: ["x^3", "2x", "x^3/2", "x^3/3"],
      answer: "x^3/3",
    },
    {
      id: 3,
      question: "What is the derivative of x^4+x^2+1?",
      answerChoices: ["4x^3+2x", "4x^3", "2x", "x^5/5+x^3/3+x"],
      answer: "4x^3+2x",
    },
    {
      id: 4,
      question: "If 3x-y=12, what is the value of 8^x/2^y?",
      answerChoices: ["4^4", "8^2", "2^12", "Cant be determined"],
      answer: "2^12",
    },
  ],

  //Geography Questions
  [
    {
      id: 1,
      question: "What is the name of the tallest mountain in the world?",
      answerChoices: ["Mount Everest", "Gasherbrum III", "Gyachung Kang", "K2"],
      answer: "Mount Everest",
    },
    {
      id: 2,
      question: "What is the name of the largest country in the world?",
      answerChoices: ["Canada", "United States", "Russia", "China"],
      answer: "Russia",
    },
    {
      id: 3,
      question: "What is the only country that borders the United Kingdom?",
      answerChoices: ["Ireland", "Ukraine", "Turkey", "USA"],
      answer: "Ireland",
    },
    {
      id: 4,
      question: "What is the captial of Alabama?",
      answerChoices: ["Birmingham", "Montgomery", "Tuscaloosa", "Tuscon"],
      answer: "Montgomery",
    },
  ],
];

export default QuizQuestions;
