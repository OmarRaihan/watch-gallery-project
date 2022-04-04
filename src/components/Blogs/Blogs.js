import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <div className="question-1 bg-rose-200 rounded-xl p-4 mx-auto my-16">
        <h2 className="text-2xl font-semibold my-2">
             Context api কী ?
        </h2>
        <p>
          Context প্রতিটি স্টেজে props এর দ্বারা ডাটা পাঠানো ব্যতীত কম্পোনেন্ট tree এর দ্বারা ডাটা পাঠাতে সাহাজ্য করে। মুলত রিএক্ট application এ ডাটা
          প্যারেন্ট থেকে চাইল্ড এ props এর দ্বারা পাঠানো হয়। কিন্তু এই ব্যাপার টা বেশ ঝামেলাপূর্ণ হওয়ায় Context API এর ব্যবহার হয়। Context API
          এক্ষেত্রে যেটা করে তা হল, প্রতিটি লেভেলে ডাটা পাঠানোর জন্য props এর বদলে একক রাস্তা তৈরী করে দেয় । যার ফলে প্রতিটি লেভে আর ম্যানুয়ালি props
          লেখার দরকার পড়ে না।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
