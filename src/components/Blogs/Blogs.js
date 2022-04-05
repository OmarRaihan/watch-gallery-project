import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="question bg-rose-200 rounded-xl p-4 mx-auto my-16">
        <h2 className="text-2xl font-semibold my-2">Context api কী ?</h2>
        <p>
          Context প্রতিটি স্টেজে props এর দ্বারা ডাটা পাঠানো ব্যতীত কম্পোনেন্ট tree এর দ্বারা ডাটা পাঠাতে সাহাজ্য করে। মুলত রিএক্ট application এ ডাটা
          প্যারেন্ট থেকে চাইল্ড এ props এর দ্বারা পাঠানো হয়। কিন্তু এই ব্যাপার টা বেশ ঝামেলাপূর্ণ হওয়ায় Context API এর ব্যবহার হয়। Context API
          এক্ষেত্রে যেটা করে তা হল, প্রতিটি লেভেলে ডাটা পাঠানোর জন্য props এর বদলে একক রাস্তা তৈরী করে দেয় । যার ফলে প্রতিটি লেভে আর ম্যানুয়ালি props
          লেখার দরকার পড়ে না।
        </p>
      </div>
      <div className="question bg-purple-200 rounded-xl p-4 mx-auto my-16">
        <h1 className="text-2xl font-semibold my-2">Semantic Tag কী ?</h1>
        <p>
        Semantic tag মানুষ এবং মেশিন পড়তে পারে এমন ব্যবস্থায় তার পরিষ্কার বর্ণনা প্রদান করে। এই ট্যাগ গুলো দ্বারা কোন ওয়েবসাইট কে SEO friendly করা যায়। ওয়েবসাইটে কোনটা কোন ডকুমেন্ট তা সহজেই প্রকাশ করা যায়। যার ফলে কোন ডকুমেন্ট খুজতে বেগ পেতে হয় না। SEO friendly হওয়ায় তা সহজেই পাঠক কে খুজে পেতে সাহাজ্য করে। কিছু বহুল ব্যবহৃত Semantic Tag হলঃ header, footer, nav, section, article, aside ইত্যাদি।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
