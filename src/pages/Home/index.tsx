import { HomeContainer, SearchForm, PostsSection, ErrorSection } from "./styles";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/ProfileSection";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export interface UserProps {
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

export interface PostProps {
  number: number
  body: string
  title: string
  created_at: Date
}

export function Home() {
  const [user, setUser] = useState<UserProps>(initialUser)
  const [posts, setPosts] = useState<PostProps[]>([])
  const [searchText, setSearchText] = useState('')

  const userName = 'gabislera'
  const repoName = 'Github-blog' // may change to context in future

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
  }, [])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get(`/search/issues?q=${searchText}%20repo:${userName}/${repoName}`)
        setPosts(response.data.items)
      } catch (err) {
        setPosts(null)
      }
    }
    fetchPosts()
  }, [searchText])

  return (
    <HomeContainer>
      <Profile user={user} />

      <SearchForm>
        <div>
          <strong>Publicações</strong>
          <span>{posts ? posts.length : '0'} publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} />
      </SearchForm>


      {posts ? (
        <PostsSection>
          {posts.map(item => <PostCard key={item.number} data={item} />)}
        </PostsSection>
      ) : (
        <ErrorSection>
          <span>Ocorreu algum erro, aguarde alguns instantes e recarregue a página</span>
        </ErrorSection>
      )}
    </HomeContainer>

  )
}