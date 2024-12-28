import React from "react";
import "./CV_project.css"

const CV_project = () => {
    return (
        <div className="cv-container">
            <header className="cv-header">
                <div className="cv-photo">
                    <img
                        src="/images/CV.jpg"
                        alt="Profile"
                    />
                </div>
                <div className="cv-header-content">
                    <h1>LE THI PHUONG LAN</h1>
                    <h2>Software Intern</h2>
                </div>
            </header>
            
            <section className="cv-body">
                <div className="cv-objective">
                    <h3>ABOUT ME</h3>
                    <p>
                    I am a Physics student with a strong passion for programming and technology. Through my studies and personal projects, I have cultivated analytical thinking and problem-solving skills, which I believe are essential for tackling real-world challenges. My goal is to continuously learn and grow, contributing to the success of a dynamic company while further developing my expertise in software and innovation.
                    </p>
                </div>

                <div className="cv-contact">
                    <h3>CONTACT</h3>
                    <p><strong>Phone:</strong> 0344353273</p>
                    <p><strong>Email:</strong> phuonglan27032003@gmail.com</p>
                    <p><strong>Address:</strong> Dict. Phu Tho Hoa, Ward Tan Phu, Ho Chi Minh city</p>
                </div>

                <div className="cv-education">
                    <h3>EDUCATION</h3>
                    <div className="education-item">
                        <p><strong>Currently studying at University of Science</strong></p>
                        <p className="time-period">2021 - 2025</p>
                    </div>
                    <p>Faculty of Physics & Engineering Physics</p>
                </div>

                <div className="cv-experiences">
                    <h3>EXPERIENCE</h3>
                    <div className="education-item">
                        <p><strong>Internship at RevoBricks LLC</strong></p>
                        <p className="time-period">01/07/2024 - 31/08/2024</p>
                    </div>
                    <p>Redesign the schematic</p>
                    <p>Circuit board design</p>
                </div>

                <div className="cv-project">
    <h3>PROJECT</h3>
    
    {/* Project 1: Stopwatch using PIC16F887 */}
    <div className="cv-project-item">
        <h4>Stopwatch using PIC16F887</h4>
        <p><strong>Customer:</strong> Stopwatch using PIC16F887</p>
        <p><strong>Description:</strong> This project involves designing a stopwatch using the PIC16F887 microcontroller. It includes two main sections: ticks and seconds, which are displayed on 7-segment LEDs. The key focus was ensuring accurate real-time operation of the device.</p>
        <p><strong>Team Size:</strong> 4</p>
        <p><strong>My Position:</strong> Developer</p>
        <p><strong>My Responsibilities:</strong> 
            <ul>
                <li>Analyzed and designed the electric circuit for the stopwatch.</li>
                <li>Performed testing on the circuits to ensure functionality.</li>
                <li>Developed code for the PIC16F887 microcontroller using PIC-C Compiler.</li>
            </ul>
        </p>
        <p><strong>Technologies Used:</strong> PIC16F887, PIC-C Compiler, Proteus</p>
    </div>

    {/* Project 2: Smart Street Lights */}
    <div className="cv-project-item">
        <h4>Smart Street Lights</h4>
        <p><strong>Customer:</strong> Smart Street Lights</p>
        <p><strong>Description:</strong> The project is aimed at designing an automatic street light system that uses sensors to detect objects, which then triggers the lights to illuminate. Additionally, it integrates infrared cameras for surveillance and data collection, enhancing energy efficiency and safety.</p>
        <p><strong>Team Size:</strong> 6</p>
        <p><strong>My Position:</strong> Developer</p>
        <p><strong>My Responsibilities:</strong> 
            <ul>
                <li>Analyzed and designed the electric circuits for the streetlight system.</li>
                <li>Tested circuits to ensure proper functionality and performance.</li>
                <li>Assembled the circuits and completed the hardware for the product prototype.</li>
            </ul>
        </p>
        <p><strong>Technologies Used:</strong> Arduino Uno R3, Ultrasonic Sensor HC-SR04, Resistor, LED Lights</p>
        <p><strong>Project Achievements:</strong> 
            <ul>
                <li>The project achieved a top 10 ranking in the DigiTrans Smart City competition.</li>
                <li>Successfully reduced energy consumption by optimizing sensor-driven automation.</li>
            </ul>
        </p>
    </div>
</div>

                <div className="cv-achievement">
                    <h3>ACHIEVEMENT</h3>
                    <div className="education-item">
                        <p>Top 10/50 DigiTrans Smart City competitions</p>
                        <p className="time-period">09/2023 - 11/2023</p>
                    </div>
                </div>

                <div className="cv-skill">
                    <h3>SKILL</h3>
                    <p>Word, Excel</p>
                    <p>MATLAB, C++, Python</p>
                    <p>SQL</p>
                    <p>Proteus</p>
                    <p>C(PIC-C) Language</p>
                    <p>PIC Microcontroller</p>
                    <p>FPGA</p>
                    <p>Java, JavaScript</p>
                </div>

                <div className="cv-language">
                    <h3>LANGUAGE</h3>
                    <div>English</div>
                </div>
            </section>
        </div>
    )
}

export default CV_project