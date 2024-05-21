import profile1 from "../assets/profiles/1.jpg"
import profile2 from "../assets/profiles/2.jpg"
import profile3 from "../assets/profiles/3.jpg"
import profile4 from "../assets/profiles/4.jpg"
import profile5 from "../assets/profiles/5.jpg"
import "../styles/story.css"

function Story() {
    type StoryType = {
        name: string,
        profile: string
    }

    const stories: StoryType[] = [
        {
            name: "John",
            profile: profile1
        },
        {
            name: "Jane",
            profile: profile2
        },
        {
            name: "Doe",
            profile: profile3
        },
        {
            name: "Smith",
            profile: profile4
        },
        {
            name: "Doe",
            profile: profile5
        }
    ]
  return (
    <div className="storyDiv">
        {stories.map((story, index) => (
            <div key={index} className="story">
            <img src={story.profile} alt={story.name} className="storyProfile" />
            <p>{story.name}</p>
            </div>
        ))}       
    </div>
  )
}

export default Story
