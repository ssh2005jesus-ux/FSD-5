
function Skills() {
    const skills = [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "SQL"
    ];

    return (
        <div className="skills">
            <h1>My Skills</h1>
            <p>Technologies I work with</p>

            <div className="skill-container">
                {skills.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;

