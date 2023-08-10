import { FaChevronLeft, FaGithub, FaBuilding, FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PostHeaderContainer, NavigationLinks, PostInfo } from "./styles";
import { NavLink } from 'react-router-dom'


export function PostHeader() {
  return (
    <PostHeaderContainer>
      <NavigationLinks>
        <div>
          <FaChevronLeft />
          <NavLink to='/'>VOLTAR</NavLink>
        </div>
        <div>
          <a href="">VER NO GITHUB</a>
          <FaArrowUpRightFromSquare />
        </div>
      </NavigationLinks>

      <strong>JavaScript data types and data structures</strong>

      <PostInfo>
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
      </PostInfo>
    </PostHeaderContainer>
  )
}