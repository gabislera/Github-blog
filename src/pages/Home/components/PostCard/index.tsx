import { PostContainer } from "./styles";
import { PostProps } from '../../index'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from "react-router-dom";
interface PostData {
  data: PostProps
}

export function PostCard({ data }: PostData) {
  const date = new Date(data.created_at)
  const navigate = useNavigate()

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })

  function handleNavigate() {
    navigate(`/post/${data.number}`)
  }

  return (
    <PostContainer onClick={handleNavigate}>
      <div>
        <strong>{data.title}</strong>
        <span>{publishedDateRelativeToNow}</span>
      </div>
      <p>{data.body}</p>
    </PostContainer>
  )
}