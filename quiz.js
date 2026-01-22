const quizData = [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyper Tool Markup Language"
                ],
                answer: 0
            },
            {
                question: "Which language runs in browser?",
                options: ["Python", "Java", "JavaScript"],
                answer: 2
            },
            {
                question: "What is DOM?",
                options: [
                    "Document Object Model",
                    "Data Object Model",
                    "Digital Object Model"
                ],
                answer: 0
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        const questionE1 = document.getElementById("question");
        const optionsE1 = document.getElementById("options");
        const scoreE1 = document.getElementById("score");

        function loadQuestion() {
            optionsE1.innerHTML = "";
            let q = quizData[currentQuestion];
            questionE1.textContent = q.question;

            q.options.forEach((option, index) => {
                let btn = document.createElement("button");
                btn.textContent = option;
                btn.onclick = () => checkAnswer(index);
                optionsE1.appendChild(btn);

            });
        }
        function checkAnswer(selected) {
            if (selected === quizData[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;

            if (currentQuestion < quizData.length) {
                loadQuestion();
            }
            else {
                showResult();
            }
        }

        function showResult() {
            questionE1.textContent = "Quiz Finished 🎉";
            optionsE1.innerHTML = "";
            scoreE1.textContent = `Your Score: ${score}/${quizData.length}`;
        }

        loadQuestion();
