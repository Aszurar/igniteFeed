import React from 'react'
import { Post } from '../../components/Post'
import { Container } from '../../components/Container'

export function Home() {
  return (
    <Container>
      <Post
        author="Lucas de Lima"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
      />
      <Post
        author="Sorveteiro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
      />
    </Container>
  )
}
