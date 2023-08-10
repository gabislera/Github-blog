import { FaGithub, FaBuilding, FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProfileContainer, ProfileSection, UserName, ProfileInfo } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/gabislera.png" alt="" />

      <ProfileSection>
        <UserName>
          <strong>Cameron Williamson</strong>
          <div>
            <a href="">GITHUB</a>
            <FaArrowUpRightFromSquare />
          </div>
        </UserName>

        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <ProfileInfo>
          <div>
            <FaGithub />
            <span>cameronwll</span>
          </div>
          <div>
            <FaBuilding />
            <span>Rocketseat</span>
          </div>
          <div>
            <FaUser />
            <span>32 seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileSection>
    </ProfileContainer>
  )
}