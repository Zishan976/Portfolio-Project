import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSaction = () => {
  return (
    <section id="about" className="container py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <img
              src="/Khalilur-img.jpg"
              alt="Khalirur_img"
              className="rounded-full w-[10rem] h-[10rem] text-center mx-auto mb-7"
            />
            <h3 className="text-2xl font-semibold">
              Web Developer, Interface Designer & Creative Problem Solver
            </h3>
            <p>
              I enjoy building thoughtful, user-friendly web experiences that
              combine clean design, responsive layouts, and smooth interactions.
              I focus on clarity, accessibility, and creativity—crafting
              interfaces that feel intuitive and leave a lasting impression.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="/Khalilur-Rahman-CV.pdf" className="cosmic-button">
                Download CV
              </a>
              <a
                href="#contact"
                className="py-2 px-6 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Web Development</h4>
                  <p>
                    Creating responsive websites and web application with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">UI/UX Design</h4>
                  <p>
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Project Management</h4>
                  <p>
                    Leanding projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSaction;
