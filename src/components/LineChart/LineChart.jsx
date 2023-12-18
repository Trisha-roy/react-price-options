import { LineChart as LChart , Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const mathMarks=[
        {
          "id": 1,
          "name": "Student 1",
          "mathMarks": 75
        },
        {
          "id": 2,
          "name": "Student 2",
          "mathMarks": 80
        },
        {
          "id": 3,
          "name": "Student 3",
          "mathMarks": 65
        },
        {
          "id": 4,
          "name": "Student 4",
          "mathMarks": 90
        },
        {
          "id": 5,
          "name": "Student 5",
          "mathMarks": 85
        },
        {
          "id": 6,
          "name": "Student 6",
          "mathMarks": 70
        },
        {
          "id": 7,
          "name": "Student 7",
          "mathMarks": 78
        },
        {
          "id": 8,
          "name": "Student 8",
          "mathMarks": 88
        },
        {
          "id": 9,
          "name": "Student 9",
          "mathMarks": 95
        },
        {
          "id": 10,
          "name": "Student 10",
          "mathMarks": 60
        }
      ]
      
    return (
        <div>
            <LChart width={800} height={400} data={mathMarks}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line type="monotone" dataKey="mathMarks" stroke="yellow" />
            </LChart>
        </div>
    );
};

export default LineChart;