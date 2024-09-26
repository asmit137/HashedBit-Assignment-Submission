const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const getAverage = scores => {
    const total = Object.values(scores).reduce((acc, score) => acc + score, 0);
    const numberOfSubjects = Object.keys(scores).length;
    return total / numberOfSubjects;
};

const result = Object.keys(students).reduce((acc, student) => {
    acc[student] = { average: getAverage(students[student]) };
    return acc;
}, {});

console.log(result);
