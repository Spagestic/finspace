"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question:
      "What percentage of your income should you ideally save each month?",
    options: ["5%", "10-20%", "30-40%", "50%"],
    correctAnswer: 1,
    explanation:
      "Financial experts recommend saving 10-20% of your income for emergencies and future goals.",
  },
  {
    id: 2,
    question: "What is the 50/30/20 budgeting rule?",
    options: [
      "50% needs, 30% wants, 20% savings",
      "50% savings, 30% needs, 20% wants",
      "50% wants, 30% savings, 20% needs",
      "50% income, 30% expenses, 20% debt",
    ],
    correctAnswer: 0,
    explanation:
      "The 50/30/20 rule suggests allocating 50% to needs, 30% to wants, and 20% to savings and debt repayment.",
  },
  {
    id: 3,
    question: "What is an emergency fund?",
    options: [
      "Money for vacations",
      "Money saved for unexpected expenses",
      "Money for investing",
      "Money for shopping",
    ],
    correctAnswer: 1,
    explanation:
      "An emergency fund is savings set aside for unexpected expenses like medical bills, car repairs, or job loss.",
  },
  {
    id: 4,
    question:
      "How many months of expenses should you have in your emergency fund?",
    options: ["1 month", "2-3 months", "3-6 months", "12 months"],
    correctAnswer: 2,
    explanation:
      "Most financial advisors recommend having 3-6 months of living expenses saved in an emergency fund.",
  },
  {
    id: 5,
    question: "What is compound interest?",
    options: [
      "Interest paid only once",
      "Interest earned on interest",
      "Interest on loans only",
      "Fixed interest rate",
    ],
    correctAnswer: 1,
    explanation:
      "Compound interest is when you earn interest on both your initial deposit and the interest that accumulates over time.",
  },
  {
    id: 6,
    question: "Which expense is considered a 'need' rather than a 'want'?",
    options: [
      "Netflix subscription",
      "Groceries",
      "Designer clothes",
      "Gaming console",
    ],
    correctAnswer: 1,
    explanation:
      "Groceries are essential for survival and considered a need, while entertainment and luxury items are wants.",
  },
  {
    id: 7,
    question: "What is a budget?",
    options: [
      "A wish list of items to buy",
      "A plan for spending and saving money",
      "A loan from the bank",
      "An investment strategy",
    ],
    correctAnswer: 1,
    explanation:
      "A budget is a financial plan that helps you track income and expenses to manage your money effectively.",
  },
  {
    id: 8,
    question: "What does APR stand for in credit cards?",
    options: [
      "Annual Percentage Rate",
      "Average Payment Return",
      "Automatic Payment Request",
      "Annual Price Reduction",
    ],
    correctAnswer: 0,
    explanation:
      "APR stands for Annual Percentage Rate - the yearly interest rate charged on borrowed money.",
  },
];

export default function QuizCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = (score / quizQuestions.length) * 100;
    return (
      <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-3xl">Quiz Complete! 🎉</CardTitle>
          <CardDescription className="text-lg mt-2">
            You scored {score} out of {quizQuestions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">
              {percentage.toFixed(0)}%
            </div>
            <p className="text-muted-foreground">
              {percentage >= 80
                ? "Excellent work! You're a finance whiz!"
                : percentage >= 60
                ? "Good job! Keep learning!"
                : "Keep practicing to improve your financial literacy!"}
            </p>
          </div>
          <Progress value={percentage} className="h-3" />
        </CardContent>
        <CardFooter>
          <Button onClick={handleRestart} className="w-full" size="lg">
            Retake Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardDescription>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </CardDescription>
          <CardDescription>
            Score: {score}/{answeredQuestions.length}
          </CardDescription>
        </div>
        <Progress value={progress} className="h-2 mb-4" />
        <CardTitle className="text-xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(val) => handleAnswerSelect(parseInt(val))}
        >
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    showCorrect
                      ? "border-green-500 bg-green-50"
                      : showIncorrect
                      ? "border-red-500 bg-red-50"
                      : isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  } ${showResult ? "cursor-default" : ""}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                    disabled={showResult}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    {option}
                  </Label>
                  {showCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  {showIncorrect && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              );
            })}
          </div>
        </RadioGroup>

        {showResult && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              selectedAnswer === question.correctAnswer
                ? "bg-green-50 border-2 border-green-200"
                : "bg-blue-50 border-2 border-blue-200"
            }`}
          >
            <p className="font-semibold mb-2">
              {selectedAnswer === question.correctAnswer
                ? "Correct! ✓"
                : "Explanation:"}
            </p>
            <p className="text-sm text-muted-foreground">
              {question.explanation}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="w-full"
            size="lg"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNext} className="w-full" size="lg">
            {currentQuestion < quizQuestions.length - 1
              ? "Next Question"
              : "View Results"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
