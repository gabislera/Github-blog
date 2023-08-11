import { PostContainer } from "./styles";
import { PostProps } from '../../index'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
interface PostData {
  data: PostProps
}

export function PostCard({ data }: PostData) {
  const date = new Date(data.created_at)

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })

  console.log(publishedDateRelativeToNow)

  return (
    <PostContainer>
      <div>
        <strong>{data.title}</strong>
        <span>{publishedDateRelativeToNow}</span>
      </div>
      <p>{data.body}</p>
    </PostContainer>
  )
}