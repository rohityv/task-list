export const statusObj = [
    {
        id: 1, name: "Not Started", cardData: [
            { id: "p-11", status: "Not Started", pname: "project1", sdate: "01/12/2024", edate: "02/12/2024", files: "12", people: "10+", srange: 7, erange: 12, done: "0", },
            { id: "p-12", status: "Not Started", pname: "project2", sdate: "02/12/2024", edate: "03/12/2024", files: "13", people: "12+", srange: 8, erange: 13, done: "0", },
            { id: "p-13", status: "Not Started", pname: "project3", sdate: "03/12/2024", edate: "04/12/2024", files: "14", people: "14+", srange: 9, erange: 14, done: "0", },
            { id: "p-14", status: "Not Started", pname: "project4", sdate: "04/12/2024", edate: "05/12/2024", files: "15", people: "15+", srange: 10, erange: 15, done: "0", },
        ]
    },
    {
        id: 2, name: "In Progress", cardData: [
            { id: "p-15", status: "In Progress", pname: "project5", sdate: "05/12/2024", edate: "06/12/2024", files: "16", people: "16+", srange: 11, erange: 16, done: "60", },
            { id: "p-16", status: "In Progress", pname: "project6", sdate: "06/12/2024", edate: "07/12/2024", files: "17", people: "17+", srange: 12, erange: 17, done: "70", },
            { id: "p-17", status: "In Progress", pname: "project7", sdate: "07/12/2024", edate: "08/12/2024", files: "18", people: "18+", srange: 13, erange: 18, done: "80", },
            { id: "p-18", status: "In Progress", pname: "project8", sdate: "08/12/2024", edate: "09/12/2024", files: "19", people: "19+", srange: 14, erange: 19, done: "90", },
        ]
    },
    {
        id: 3, name: "Archived", cardData: [
            { id: "p-19", status: "Archived", pname: "project9", sdate: "09/12/2024", edate: "10/12/2024", files: "20", people: "20+", srange: 15, erange: 20, done: "25", },
            { id: "p-20", status: "Archived", pname: "project10", sdate: "10/12/2024", edate: "11/12/2024", files: "21", people: "21+", srange: 16, erange: 21, done: "34", },
            { id: "p-21", status: "Archived", pname: "project11", sdate: "11/12/2024", edate: "12/12/2024", files: "22", people: "22+", srange: 17, erange: 22, done: "35", },
            { id: "p-22", status: "Archived", pname: "project12", sdate: "12/12/2024", edate: "13/12/2024", files: "23", people: "23+", srange: 18, erange: 23, done: "45", },
        ]
    },
    {
        id: 4, name: "Completed", cardData: [
            { id: "p-23", status: "Completed", pname: "project13", sdate: "13/12/2024", edate: "14/12/2024", files: "24", people: "24+", srange: 19, erange: 24, done: "100", },
            { id: "p-24", status: "Completed", pname: "project14", sdate: "14/12/2024", edate: "15/12/2024", files: "25", people: "25+", srange: 20, erange: 25, done: "100", },
            { id: "p-25", status: "Completed", pname: "project35", sdate: "15/12/2024", edate: "16/12/2024", files: "26", people: "26+", srange: 21, erange: 26, done: "100", },
            { id: "p-126", status: "Completed", pname: "project46", sdate: "16/12/2024", edate: "17/12/2024", files: "27", people: "27+", srange: 22, erange: 27, done: "100", },
        ]
    }
]


export const accordianData = [
    { id: 1, name: "All Projects" },
    { id: 2, name: "All Tasks" },
]

export const backgroundColor = {
    "Completed":
        "#4CAF50",
    "Archived":
        "#607D8B",
    "In Progress":
        "#4A90E2",
    "Not Started":
        "#B0B0B0",
}