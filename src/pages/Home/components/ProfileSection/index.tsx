import { FaGithub, FaBuilding, FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProfileContainer, ProfileSection, UserName, ProfileInfo } from "./styles";
import { UserProps } from '../../index'

interface User {
  user: UserProps
}

export function Profile({ user }: User) {
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />

      <ProfileSection>
        <UserName>
          <strong>{user.name}</strong>
          <div>
            <a href={user.html_url}>GITHUB</a>
            <FaArrowUpRightFromSquare />
          </div>
        </UserName>

        <p>{user.bio}</p>

        <ProfileInfo>
          <div>
            <FaGithub />
            <span>{user.login}</span>
          </div>
          <div>
            <FaBuilding />
            <span>{user.company ? user.company : 'no company'}</span>
          </div>
          <div>
            <FaUser />
            <span>{user.followers} seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileSection>
    </ProfileContainer>
  )
}