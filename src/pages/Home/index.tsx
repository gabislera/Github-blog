import { HomeContainer, SearchForm, PostsSection } from "./styles";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/ProfileSection";
export function Home() {
  return (
    <HomeContainer>

      <Profile />

      <SearchForm>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <PostsSection>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsSection>
    </HomeContainer>

  )
}