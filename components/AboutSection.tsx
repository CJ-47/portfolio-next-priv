import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Git" },
  { skill: "C++" }, 
  { skill: "Python" },
  { skill: "Android Development" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, My name is Hritik and I am an &nbsp;
              <span className="text-red-500 font-bold">{"Ambitious"}</span> &nbsp;,&nbsp;
              <span className="font-bold text-blue-500">{"Enthusiastic"}</span> &nbsp;, and &nbsp;
              <span className="font-bold text-amber-500">{"Driven"}</span>  Software Developer
              from Uttarakhand , India .
            </p>
            <br />
            <p>
              I am an undergraduate student from Vellore Institute of Technology , Bhopal 
              with Bachelors of Technology in Computer Science and Engineering . 
            </p>
            <br />
            <p>
              I have a wide range of hobbies which include reading books , watching short films and cycling .
              I like to learn and hone my skills regularly by creating and implementing my ideas .
            </p>
            <br />
            <p>
              I am excited to see where my career takes me as I enthusiastically open the doors to new opportunities 
              with my will and skills. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="cursor-pointer bg-indigo-300 hover:bg-violet-300 px-4 py-2 mr-2 mt-2 text-indigo-800 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <div></div>
            <div className="pt-10">
            <Image 
              src="/skills.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
