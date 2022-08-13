import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'
import { DeleteComment } from './components/DeleteComment'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/misaellopes01.png',
      name: 'Misael Lopes',
      role: 'Back-end Developer @PCS NET'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Fala galeraa 👋,'
      },
      {
        type: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        text: 'jane.design/doctorcare'
      },
      {
        type: 'link',
        text: '#novoprojeto'
      },
    ],
    publishedAt: new Date('2022-08-03 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Fala galeraa 👋,'
      },
      {
        type: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é FeedNeet 🚀'
      },
      {
        type: 'link',
        text: 'jane.design/doctorcare'
      },
      {
        type: 'link',
        text: '#novoprojeto'
      },
    ],
    publishedAt: new Date('2022-08-01 10:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}