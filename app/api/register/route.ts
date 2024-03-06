import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
try{
    const body = await request.json();
    console.log('Request Body:', body)
    const {
        email,
        name,
        password,
        contactNumber,
        address,
        role,
        isIndividual,
        isCompany,
        withFile,
        listing,

    } =body;
    if (!email || !name || !password || !address || !role || !contactNumber   || !listing){
        return new NextResponse('Missing info', {status:400});
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user=await prisma.user.create({
        data:{
            email,
            name,
            hashedPassword,
            contactNumber,
            address,
            role,
            isIndividual,
            isCompany,
            withFile,
            listing,
        }
    });
    return NextResponse.json(user);
 } catch (error:any){
    console.log(error,'REGISTRATION_ERROR') ;
    return new NextResponse('Internal Error', {status:500});
 }
};
