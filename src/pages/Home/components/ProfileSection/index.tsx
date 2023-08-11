import { FaGithub, FaBuilding, FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProfileContainer, ProfileSection, UserName, ProfileInfo } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../../../services/api";

interface UserProps {
  avatar_url: string
  name: string
  bio: string
  followers: number
  login: string
  company: string | null
  html_url: string
}

const initialUser = {
  avatar_url: '',
  name: '',
  bio: '',
  followers: 0,
  login: '',
  company: '',
  html_url: ''
}

export function Profile() {
  const [user, setUser] = useState<UserProps>(initialUser)
  const userName = 'gabislera'

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users/${userName}`)

      const { avatar_url, name, bio, followers, login, company, html_url } = response.data

      const user = {
        avatar_url,
        name,
        bio,
        followers,
        login,
        company,
        html_url
      }

      setUser(user)
    }
    fetchUser()
    // console.log('teste')
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user.name])

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