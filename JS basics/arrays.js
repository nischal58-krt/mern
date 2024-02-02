let user1 = "ram"
user1 = {
       name : "nischal",
       permanentAddress : {
              district : "Jhapa",
              province : 1,
              street : "xyz"
       },
       temporaryAddress : {
              district : "Kathmandu",
              province : 3,
              street : "putalisadak"
       },
}
console.log(user1.name + " is from " +  user1.permanentAddress.district);
console.log(`${user1.name} is from ${user1.permanentAddress.district}`);

console.log(`${user1.name} is from province ${user1.temporaryAddress.province}`);
courses = [
    {
           title:"mern",
           duration : "3 months",
           teacher : "xyz",
           syallabus : [
                  {
                  title:"js",
                  duration : "20 days",
                  },
                  {
                         title:"express",
                         duration : "25 days",
                  },
                  {
                         title:"react",
                         duration : "30 days",
                  }          
           ]
    },
    {
           title:"python",
           duration : "3months",
    teacher : "abx",
    syallabus : [
           {
           title:"oop",
           duration : "20 days",
           },
           {
                  title:"django",
                  duration : "25 days",
           },
    ]
    },
    {
           title:"qa",
           duration : "2.5months",
    teacher : "vcz",
    syllabus :"empty"
    },     
]
courses[0].syallabus[0].title="javascript"
courses[0].syallabus[0].duration="23 days"

console.log("Course Details", courses);
let germanClass = [
       {
              level : "A1 BL",
              duration:"9 weeks",
              lehrer:"Abinash",
              grammatik : [
                     {
                     week1:"Satz Formen",
                     week2:"Nominativ,Akkusativ",
                     week3:"verben und Partizip II",
                     }
              ]
       },

       {
              level : "A2 BL",
              duration:"10 weeks",
              lehrer:"Sang Kim",
              grammatik : [
                     {
                     week1:"A1 Wiederholung",
                     week2:"Dativ,Vergangenheit,prateritum",
                     week3:"Haptsatz,Nebensatz.Adjektivendugen",
                     }
              ]
       },
       {
              level : "B1 BL",
              duration:"12 weeks",
              lehrer:"Sebastian",
              grammatik : [
                     {
                     week1:"Blog lesen",
                     week2:"Genitiv",
                     week3:"Relativ Clause",
                     }
              ]
       },
]
germanClass[2].grammatik[2]="Connectors,Nachfield"
console.log("german language classes",germanClass);
