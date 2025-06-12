import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    user:defineTable({
        // The user table is automatically created by Convex
        // and contains the user's email and id.

        name: v.string(),
        email: v.string(),
        credits : v.number(),
        subscriptionID : v.string(),
    })
})