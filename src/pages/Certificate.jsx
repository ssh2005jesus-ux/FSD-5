import React from "react";
function Certifications() {
    return (
        <section className="cert-full">
            <div className="cert-content">
                <h1 className="cert-head">My <span>Certifications</span></h1>
                <p className="cert-para">A collection of certificates that validate my learning journey and showcase my growing technical expertise.</p>

            </div>
            <div className="cert-card">

                <div className="pcard">
                    <h3>Python FullStack</h3>
                    <p>Gained hands on experience in python,Flask,HTML,CSS and sqlite the application tracks medicine schedules and manage refills effciently with caretaker option.</p>
                    <a href="/certificates/apollo%20certificate.pdf" target="_blank">
                        View Certificate →
                    </a>
                </div>
                <div className="Wcard">
                    <h3>Problem solving and Innovation</h3>
                    <p>Gained knowledge of problem-solving techniques and innovative thinking.Completed 4 hours of training.</p>
                    <a href="/certificates/problem.pdf" target="_blank">
                        View Certificate →
                    </a>
                </div>
                <div className="Jcard">
                    <h3>Java FullStack Development</h3>
                    <p>Gained hands on experience in Java Fullstack.Worked on the project titled 'Queless'.Improved problem-solving,teamwork,documentation,and software development SKills.</p>
                    <a href="/certificates/Janani.S.pdf" target="_blank">
                        View Certificate →
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Certifications;