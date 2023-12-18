import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import axios from "axios";


const Phones = () => {
    const[phones,setPhones]=useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res=>res.json())
        .then(data=>{
            const phoneData=data.data;
            const phonesWithFakeData=phoneData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData)
            setPhones(phonesWithFakeData)
        })
        // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data=>console.log(data.data.data))
    },[])
    return (
        <div>
            <h2 className='text-5xl'>Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
        </BarChart>
        </div>
    );
};

export default Phones;