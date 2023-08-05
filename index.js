// quiz.ts
import inquirer from 'inquirer';
class QuizSystem {
    questions = [
        {
            text: 'What is TypeScript?',
            choices: ['A scripting language', 'A superset of JavaScript', 'A styling library'],
            correctAnswer: 1,
        },
        {
            text: 'Which keyword is used to declare a variable in TypeScript?',
            choices: ['var', 'let', 'const'],
            correctAnswer: 2,
        },
        {
            text: 'What is the return type of a function that does not return any value?',
            choices: ['void', 'undefined', 'null'],
            correctAnswer: 0,
        },
    ];
    async askQuestion(question) {
        const { answerIndex } = await inquirer.prompt({
            type: 'list',
            name: 'answerIndex',
            message: question.text,
            choices: question.choices,
        });
        const isCorrect = answerIndex === question.correctAnswer;
        if (isCorrect) {
            console.log('Your answer is correct!\n');
        }
        else {
            console.log('Your answer is wrong.\n');
        }
        return isCorrect;
    }
    async runQuiz() {
        let score = 0;
        for (const question of this.questions) {
            const isCorrect = await this.askQuestion(question);
            if (isCorrect) {
                score++;
            }
        }
        return score;
    }
    async displayScore(score) {
        console.log(`\nYour score: ${score} out of ${this.questions.length}`);
    }
    async startQuiz() {
        console.log('Welcome to the TypeScript Quiz!');
        const score = await this.runQuiz();
        await this.displayScore(score);
    }
}
// Entry point
const quizSystem = new QuizSystem();
quizSystem.startQuiz();
