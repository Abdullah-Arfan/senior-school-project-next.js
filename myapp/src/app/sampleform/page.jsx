// 'use client';

// import { useState } from 'react';

// export default function SampleForm() {
//     const [form, setForm] = useState({ name: '', email: '' });
//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const res = await fetch('/api/sampleform', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(form),
//         });

//         const data = await res.json();
//         setMessage(data.success ? 'Student inserted ✅' : 'Error inserting ❌');
//         setForm({ name: '', email: '' });
//     };

//     return (
//         <div className="pt-32 bg-yellow-500 text-black">
//             <div className="container-form p-10">
//                 <form onSubmit={handleSubmit} className="flex-column gap-10">
//                     <div className="user-info w-96 flex justify-center">
//                         <label htmlFor="nameid" className="w-60">Name</label>
//                         <input   id="nameid"      type="text"   name="name"
//                             value={form.name}   onChange={handleChange} 
//                             placeholder="Enter your name"  className="w-60"
//                         />
//                     </div>

//                     <div className="user-info w-96 flex justify-center">
//                         <label htmlFor="emailid" className="w-60">Email</label>
//                         <input    id="emailid"  type="email"     name="email"
//                             value={form.email}  onChange={handleChange}
//                             placeholder="Enter your email"     className="w-60"
//                         />
//                     </div>

//                     <button type="submit">Submit</button>
//                 </form>

//                 {message && <p className="mt-4 text-red-600">{message}</p>}
//             </div>
//         </div>
//     );
// }



