import { useParams } from "react-router-dom";
import { PostHeader } from "./components/PostHeader";
import { CodeContent, PostContainer, PostContent } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { UserProps, PostProps } from '../Home'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface CompletePost extends PostProps {
  user: UserProps
  comments: number
  html_url: string
}

const initialPost = {
  number: 0,
  title: '',
  body: '',
  created_at: new Date(),
  user: {
    avatar_url: '',
    name: '',
    bio: '',
    followers: 0,
    login: '',
    company: '',
    html_url: ''
  },
  comments: 0,
  html_url: ''
}

export function Post() {
  const [post, setPost] = useState<CompletePost>(initialPost)
  const { id } = useParams()

  const userName = 'gabislera'
  const repoName = 'Github-blog' // may change to context in future

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(`/repos/${userName}/${repoName}/issues/${id}`)
      setPost(response.data)
      console.log(response.data)
    }
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostHeader data={post} />

      <PostContent>

        <ReactMarkdown className="react-markdown" remarkPlugins={[remarkGfm]}>
          {post.body}

        </ReactMarkdown>

        <CodeContent>

        </CodeContent>


      </PostContent>
    </PostContainer>
  )
}