import express from "express";

export const register = async (req , res) =>{

    console.log(req.body)

     await res.json({
        message:'data recieved successfully',
        data:req.body
    })
}