// The provided Course Information.   ////Object///
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
    
  // The provided Assignment Group.   //// Array Object///
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,                 //course ID Info
    group_weight: 25,               // % weight of entire assignment group

    assignments: [                  ////Array Object///
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };



  
  // The provided learner submission data. //// Array Object///
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];


  function getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions){

    if (AssignmentGroup.course_id !== CourseInfo.id) {
      throw new Error("Invalid input: AssignmentGroup does not belong to CourseInfo.");
    }

    let result = [];
    let learnerDataObj = {};
    

    learnerSubmissions.forEach(submissions => {

      const learnerID = submissions.learner_id;
      const assignmentID = submissions.assignment_id; 
      const score = submissions.submission.score;

      //gets points possible from Assignmentgroup obj
      const pointsPossible = AssignmentGroup.assignments.find(num => num.id === assignmentID).points_possible;
      
      const learnerScore = score / pointsPossible;

     //gets assignment name from AssignmentGroup obj
      const assignmentName = AssignmentGroup.assignments.find(na => na.id === assignmentID).name;
      
      // console.log(assignmentName);

      if (pointsPossible === 0) {
        throw new Error(`Invalid input: points_possible for assignment '${assignmentName}' is 0.`);
      }

      if(!learnerDataObj[learnerID]){
        learnerDataObj[learnerID] = {
          id: learnerID,
          totalScore: 0,
          totalPoints: 0,
          scores:{}
        }
      }

      const learnerData = learnerDataObj[learnerID];

      learnerData.totalScore += score;
      learnerData.totalPoints += pointsPossible;
      learnerData.scores[assignmentID] = learnerScore;
     });

     Object.values(learnerDataObj).forEach(learnerData => {
      
      const avg = (learnerData.totalScore / learnerData.totalPoints);
      // console.log(avg);
      const learnerResult = {
        id: learnerData.id,
        avg: avg,
        ...learnerData
      };
      result.push(learnerResult)
     });
     return result
    };
    
    try {
      const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }


    // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
    // console.log(result);