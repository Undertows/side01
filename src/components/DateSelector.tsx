export {}
// import React, { useState, useEffect } from 'react'

// export default function DateSelector({
//   handleDateSelect,
// }: {
//   handleDateSelect: Function
// }) {
//   const [month, setMonth] = useState([] as number[])
//   const [date, setDate] = useState([] as number[])
//   const [year, setYear] = useState([] as number[])
//   const now = new Date()
//   const [fullYear, setFullYear] = useState({
//     year: now.getFullYear(),
//     month: now.getMonth() + 1,
//     date: now.getDate(),
//   })

//   useEffect(() => {
//     function generateArray(start: number, end: number) {
//       return Array.from(new Array(end + 1).keys()).slice(start)
//     }
//     setMonth(generateArray(1, 12))
//     setDate(generateArray(1, 31))
//     setYear(generateArray(2018, 2022))
//   }, [])

//   const FullYear =
//     (dataTypes: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
//       if (dataTypes === 'year')
//         fullYear.year = e.target.value as unknown as number
//       else if (dataTypes === 'month')
//         fullYear.month = e.target.value as unknown as number
//       else if (dataTypes === 'date')
//         fullYear.date = e.target.value as unknown as number
//       handleDateSelect(fullYear)
//     }
// //TODO: 解决下面这个错误。。
//   return (
//     <>
//       <select onChange={FullYear('year')}>
//         {year.map(y => (
//           <option key={y} value={y}>
//             {y}
//           </option>
//         ))}
//       </select>
//       &nbsp;&nbsp;&nbsp;
//       {/* 不要相信开发者工具，真的会不幸。。。从此只信clg了 */}
//       <select onChange={FullYear('month')}>
//         {month.map(m => (
//           <option key={m} value={m}>
//             {m}
//           </option>
//         ))}
//       </select>
//       &nbsp;&nbsp;&nbsp;
//       <select onChange={FullYear('date')}>
//         {date.map(d => (
//           <option value={d} key={d}>
//             {d}
//           </option>
//         ))}
//       </select>
//       &nbsp;&nbsp;&nbsp;
//     </>
//   )
// }
