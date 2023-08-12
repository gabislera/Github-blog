import { FaChevronLeft, FaGithub, FaCalendarDay, FaComment } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PostHeaderContainer, NavigationLinks, PostInfo } from "./styles";
import { NavLink } from 'react-router-dom'
import { CompletePost } from '../../index'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostHeaderProps {
  data: CompletePost
}

export function PostHeader({ data }: PostHeaderProps) {
  const date = new Date(data.created_at)

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <PostHeaderContainer>
      <NavigationLinks>
        <div>
          <FaChevronLeft />
          <NavLink to='/'>VOLTAR</NavLink>
        </div>
        <div>
          <a href={data.html_url}>VER NO GITHUB</a>
          <FaArrowUpRightFromSquare />
        </div>
      </NavigationLinks>

      <strong>{data.title}</strong>

      <PostInfo>
        <div>
          <FaGithub />
          <span>{data.user.login}</span>
        </div>
        <div>
          <FaCalendarDay />
          <span>{publishedDateRelativeToNow}</span>
        </div>
        <div>
          <FaComment />
          <span>{data.comments} comentarios</span>
        </div>
      </PostInfo>
    </PostHeaderContainer>
  )
}