const employees = [
  {
      "id": 1,
      "firstName": "Renu",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update website",
              "taskDescription": "Revamp homepage design for better engagement and improved user experience.",
              "taskDate": "2024-10-12",
              "category": "Design" 
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Client meeting",
              "taskDescription": "Review project requirements to ensure clear understanding and alignment.",
              "taskDate": "2024-10-10",
              "category": "Meeting"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Fix bugs",
              "taskDescription": "Resolve reported bugs to ensure stable system performance.",
              "taskDate": "2024-10-14",
              "category": "Development"
          }
      ]
  },
  {
      "id": 2,
      "firstName": "Sneha",
      "email": "e2@e.com",
      "password": "123",
      "taskCounts": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Database optimization",
              "taskDescription": "Optimize queries to improve database performance and reduce load times.",
              "taskDate": "2024-10-11",
              "category": "Database"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Design new feature",
              "taskDescription": "Create feature mockups to guide development and user feedback.",
              "taskDate": "2024-10-09",
              "category": "Design"
          }
      ]
  },
  {
      "id": 3,
      "firstName": "Nishta",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Prepare presentation",
              "taskDescription": "Create slides for client presentation to showcase project progress.",
              "taskDate": "2024-10-13",
              "category": "Presentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Code review",
              "taskDescription": "Evaluate code for performance improvements and optimization.",
              "taskDate": "2024-10-12",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Testing",
              "taskDescription": "Perform tests on the latest build to detect and fix bugs.",
              "taskDate": "2024-10-08",
              "category": "QA"
          }
      ]
  },
  {
      "id": 4,
      "firstName": "Rahul",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 0,
          "completed": 0,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Write documentation",
              "taskDescription": "Update project documentation to include recent changes and new features.",
              "taskDate": "2024-10-13",
              "category": "Documentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Set up CI/CD",
              "taskDescription": "Implement CI/CD pipeline for streamlined deployment process.",
              "taskDate": "2024-10-11",
              "category": "DevOps"
          }
      ]
  },
  {
      "id": 5,
      "firstName": "Ishpreet",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "UI redesign",
              "taskDescription": "Redesign UI to improve usability and enhance overall user experience.",
              "taskDate": "2024-10-14",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Deploy new build",
              "taskDescription": "Deploy latest build to production for client access.",
              "taskDate": "2024-10-09",
              "category": "DevOps"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Client feedback",
              "taskDescription": "Gather client feedback post-launch to address improvements.",
              "taskDate": "2024-10-12",
              "category": "Support"
          }
      ]
  }
];

 
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}