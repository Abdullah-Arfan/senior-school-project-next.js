// // app/api/mystudent/route.js
// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email } = body;

//     if (!name || !email) {
//       return NextResponse.json(
//         { success: false, message: "Missing fields" },
//         { status: 400 }
//       );
//     }

//     const student = await prisma.student.create({
//       data: { name, email },
//     });

//     return NextResponse.json({ success: true, student }, { status: 201 });
//   } catch (error) {
//     console.error("Error inserting student:", error);
//     return NextResponse.json(
//       { success: false, message: "Error inserting student" },
//       { status: 500 }
//     );
//   }
// }









// // app/api/mystudent/route.js
// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function POST(req) {
//     try {
//         const body = await req.json();
//         const { name, email } = body;

//         if (!name || !email) {
//             return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
//         }

//         const student = await prisma.student.create({  data: { name, email },  });

//         return NextResponse.json({ success: true, student }, { status: 201 });

//     } catch (error) {
//         console.error("Error inserting student:", error);
//         return NextResponse.json({ success: false, message: "Error inserting student" }, { status: 500 });
//     }
// }
