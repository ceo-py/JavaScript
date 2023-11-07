function softUniStudents(input) {
    const courses = {}

    const addCourse = (name, size) => {
        if (courses.hasOwnProperty(name)) courses[name].size += size
        else courses[name] = {size: size, students: []}
    }
    const addStudent = (user, email, course) => {
        if (courses.hasOwnProperty(course) && courses[course].size > 0) {
            courses[course].size -= 1
            const [userName, credits] = user.replace(']', '').split('[').map(x => isNaN(x) ? x : Number(x))
            courses[course].students.push({credits, userName, email})
        }
    }

    input.forEach(x => {
        if (x.includes(': ')) addCourse(...x.split(': ').map(x => isNaN(x) ? x : Number(x)))
        else addStudent(...x.replace('with email ', '').replace('joins ', '').split(' '))
    })

    Object.entries(courses).sort((a, b) => Object.keys(b[1].students).length - Object.keys(a[1].students).length).forEach(x => {
        console.log(`${x[0]}: ${x[1].size} places left`)
        x[1].students.sort((a, b) => b.credits - a.credits).forEach(x => console.log(`--- ${x.credits}: ${x.userName}, ${x.email}`))
    })
}


// softUniStudents(['JavaBasics: 15', 'user1[26] with email user1@user.com joins JavaBasics', 'user2[36] with email user11@user.com joins JavaBasics', 'JavaBasics: 5', 'C#Advanced: 5', 'user1[26] with email user1@user.com joins C#Advanced', 'user2[36] with email user11@user.com joins C#Advanced', 'user3[6] with email user3@user.com joins C#Advanced', 'C#Advanced: 1', 'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore'])
softUniStudents(["JavaBasics: 2",
"user1[25] with email user1@user.com joins C#Basics",
"C#Advanced: 3",
"JSCore: 4",
"user2[30] with email user2@user.com joins C#Basics",
"user13[50] with email user13@user.com joins JSCore",
"user1[25] with email user1@user.com joins JSCore",
"user8[18] with email user8@user.com joins C#Advanced",
"user6[85] with email user6@user.com joins JSCore",
"JSCore: 2",
"user11[3] with email user11@user.com joins JavaBasics",
"user45[105] with email user45@user.com joins JSCore",
"user007[20] with email user007@user.com joins JSCore",
"user700[29] with email user700@user.com joins JSCore",
"user900[88] with email user900@user.com joins JSCore"])