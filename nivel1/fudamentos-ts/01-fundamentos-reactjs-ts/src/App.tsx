import { Post, PostType } from "./components/Post"
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'

export function App() {


  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatar_Url: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO @Rocketseat"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-02-03 20:00:00')
    },

    {
      id: 2,
      author: {
        avatar_Url: "https://github.com/orodrigogo.png",
        name: "Rodrigo Gonçalves",
        role: "Educator @Rocketseat"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-03-7 20:00:00')
    }

  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }

        </main>
      </div>
    </>
  )
}


