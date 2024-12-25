"use server";

import prisma from "../prisma";

export const  sendForm = async (formData: FormData) => {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;
    if
    (!name || !email || !message) {
        throw new Error("All fields are required");
    }
    await prisma.form.create({
        data: {
            name,
            email,
            message,
        },
    });
    
    

     
    

}