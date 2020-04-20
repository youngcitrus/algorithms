// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
    let prereq = buildGraph(prerequisites);
    let completed = new Set;
    let totalCourses = Object.keys(prereq).length;
    let eligibleCoursesExists = true;

    while (eligibleCoursesExists) {
        eligibleCoursesExists = false;

        for (let course in prereq) {
            let everyPreBeenMet = prereq[course].every(pre => completed.has(pre));
            if (!completed.has(course) && everyPreBeenMet) {
                completed.add(course);
                eligibleCoursesExists = true;
            }
        }
    }
    return completed.size === totalCourses;
}


function buildGraph(list) {
    let graph = {};
    list.forEach((prereq) => {
        let [course, pre] = prereq.map(String);
        if (course in graph) {
            graph[course].push(pre);
        } else {
            graph[course] = [ pre ];
        }

        if (!(pre in graph)) graph[pre] = [];
    })
    return graph;
}