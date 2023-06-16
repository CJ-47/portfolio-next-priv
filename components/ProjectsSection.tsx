import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
//import donor from "../public/donor.png"
//import blddnr from "/image/donor.png"
//import tenzy from "/image/tenzy.png"
//import buddy from "/image/buddy.png"
const projects = [
  {
    name: "Tenzy",
    description:
      "A ReactJS Based Web game where you roll 10 dices ,select a die number , separate dices with same number and re-roll remaining until all the die show same face.",
    image: "/tenzy.PNG",
    github: "https://github.com/CJ-47/Tenzy",
    link: "https://cj-47.github.io/Tenzy/",
  },
  {
    name: "Buddy4Chat",
    description: "A Chat Application using Node.js and Socket.io running on local machine",
    image: "/buddy.PNG",
    github: "https://github.com/CJ-47/ChatApp",
    link: "",
  },
  {
    name: "Blood Donor Android Application",
    description:
      "An Android Application for Donating-Receiving Blood Donation requests built with FireBase Integration for authentication and realtime database.",
    image: "/donor.PNG",
    github: "https://www.github.com/CJ-47/BloodDonorApp",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      { project.link!="" ?
                      (<Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>):(<span></span>) }
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
