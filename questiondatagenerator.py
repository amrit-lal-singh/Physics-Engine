import json
import os
os.system('python3 data.py')
Datan = [
    {
        "stepName": "Find no.of unknowns",
        "stepStatus": "active",
        "stepNumber": 1,
    },
    {
        "stepName": "Use F= ma for each object",
        "stepStatus": "inactive",
        "stepNumber": 2,
    },
    {
        "stepName": "Constraint",
        "stepStatus": "inactive",
        "stepNumber": 3,
    },
    {
        "stepName": "Final answer",
        "stepStatus": "inactive",
        "stepNumber": 4,
    }
]
Datam = [
    {
        "stepName": "Find no.of unknowns",
        "stepStatus": "active",
        "stepNumber": 1,
    },
    {
        "stepName": "Use F= ma for each object",
        "stepStatus": "inactive",
        "stepNumber": 2,
    },
    {
        "stepName": "Understanding Constraint equation",
        "stepStatus": "inactive",
        "stepNumber": 3,
    },
    {
        "stepName": "Constraint",
        "stepStatus": "inactive",
        "stepNumber": 4,
    },
    {
        "stepName": "Final answer",
        "stepStatus": "inactive",
        "stepNumber": 5,
    }
]
chapterNumber = "chapterNumber"
chapterName = "chapterName"
steps = "steps"
questionNumber = "questionNumber"
questionDesc = "questionDesc"
steps = "steps"
questions = "questions"
question_dick = []
for i in range(140):

    new_question_dick = {}
    new_question_dick[chapterNumber] = 1
    new_question_dick[chapterName] = "Newton's law"

    # print(chdata);
    # xdata = open("stepsch.json").read();
    if i+1 > 70:
        new_question_dick[steps] = Datan
    else:
        new_question_dick[steps] = Datam
    questionsn = []
    newsub_questions = {}
    newsub_questions[questionNumber] = i+1
    newsub_questions[questionDesc] = "A red block and yellow block, both of mass 1 kg are in motion as follows. Determine the acceleration of the masses and the tension in the string."
    a_steps = open("basic_step"+str(i+1)+".json")
    data = json.load(a_steps)
    newsub_questions[steps] = data
    questionsn.append(newsub_questions)
    new_question_dick[questions] = questionsn
    question_dick.append(new_question_dick)

a_file = open("qdata.json", "w")
newqd = json.dump(question_dick, a_file)
