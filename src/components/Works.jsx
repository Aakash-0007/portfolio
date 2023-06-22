import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { live } from "../assets"
import { useState } from "react"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const maxTextHeight = 100 // Maximum height for the text in pixels
  const [showFullText, setShowFullText] = useState(false)

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText)
  }

  const getDescriptionTextClass = () => {
    if (showFullText) {
      return ""
    } else {
      return "line-clamp-5" // Apply Tailwind CSS class to truncate text after 5 lines
    }
  }
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex gap-5">
              <div
                onClick={() => {
                  window.open(source_code_link, "_blank")
                }}
                className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-3/4 h-3/4"
                  object-contain
                />
              </div>
              <div
                onClick={() => {
                  window.open(live_link, "_blank")
                }}
                className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live}
                  alt="Live"
                  className="w-3/4 h-3/4"
                  object-contain
                />
              </div>
            </div>
          </div>
          <div className="max-w-lg">
            <p
              id="longText"
              className={`mt-2 text-[14px] text-secondary overflow-hidden ${getDescriptionTextClass()}`}
              style={{
                maxHeight: showFullText ? "none" : `${maxTextHeight}px`,
              }}
            >
              {description}
            </p>
            <button
              id="readMoreBtn"
              className="mt-3 violet-gradient text-white text-sm py-1 px-2 rounded hover:opacity-50"
              onClick={toggleTextVisibility}
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap  gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. <br />
          All of these tasks were built through persistent effort of problem
          solving, learning new technologies, debugging and improving design
          wherever needed.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((projects, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...projects} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "Projects")
