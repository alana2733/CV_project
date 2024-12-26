import React from "react";
import "./CV_project.css";

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
                    <h3>OBJECTIVE</h3>
                    <p>
                        anything else
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
                    <p><strong>Currently studying at University of Science</strong></p>
                    <p>Faculty of Physics & Engineering Physics</p>
                </div>

                <div className="cv-experiences">
                    <h3>EXPERIENCE</h3>
                    <p><strong>Internship at RevoBricks LLC</strong></p>
                    <p>Redesign the schematic</p>
                    <p>Circuit board design</p>
                </div>

                <div className="cv-project">
                    <h3>PROJECT</h3>
                    <p><strong>Microcontroller subject</strong></p>
                    <p><strong>21VLTH - KHTN Group</strong></p>
                </div>

                <div className="cv-achievement">
                    <h3>ACHIEVEMENT</h3>
                    <p>Top 10/50 DigiTrans Smart City competitions</p>
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