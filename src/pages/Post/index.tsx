import { useParams } from "react-router-dom";
import { PostHeader } from "./components/PostHeader";
import { PostContainer, PostContent } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { UserProps, PostProps } from '../Home'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Escolha um estilo de destaque de sintaxe
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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
      // console.log(response.data)
    }
    fetchPost()
  }, [])

  const regex = /`([^`]*)`/g;
  const matches = post.body.match(regex) || [];
  const codeBlockText = matches.map((match) => match.slice(1, -1));
  const processedBody = post.body.replace(regex, '');

  return (
    <PostContainer>
      <PostHeader data={post} />

      <PostContent>
        <ReactMarkdown className="react-markdown" remarkPlugins={[remarkGfm]}>
          {processedBody}
        </ReactMarkdown>

        {codeBlockText.length > 0 &&

          <SyntaxHighlighter language="jsx" style={dracula} customStyle={{
            paddingBlockEnd: '2rem',
            padding: '2rem',
            paddingBlockStart: '0.5rem',
            marginTop: '2rem'
          }}
            wrapLongLines
          >
            {codeBlockText}
          </SyntaxHighlighter>
        }
      </PostContent>
    </PostContainer>
  )
}

