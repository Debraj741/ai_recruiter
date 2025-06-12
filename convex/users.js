import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUsers = mutation({
    args: {
        name : v.string(),
        email: v.string(),
    },
    handler: async (ctx, args) => {
       // If User already exist

       const userData = await ctx.db.query('user')
       .filter((q) => q.eq(q.field("email"), args.email))
        .collect();

       // If not , create a new user
       if (userData?.length == 0) {
            const data = {
                name: args.name,
                email: args.email,
                credits: 50000, 
            }
           const result =  await ctx.db.insert('user', {
               ...data
           });
           console.log("User created successfully", result);
           
           return data;
       } 
       return userData[0];
    },
})